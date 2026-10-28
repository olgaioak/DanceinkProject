import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { TimetableService } from '../../services/timetable.service';
import { StudioService } from '../../services/studio.service';
import { StudioInfo, TimetableEntry, Weekday } from '../../data/models';

import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { FilterTabsComponent } from '../../ui/filter-tabs/filter-tabs.component';

interface TimetablePeriod {
  labelKey: string;
  entries: TimetableEntry[];
}

interface TimetableDay {
  day: Weekday;
  periods: TimetablePeriod[];
}

// Classes starting before this time are listed under "morning".
const AFTERNOON_START = '14:00';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionEyebrowComponent, ButtonDirective, FilterTabsComponent],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent implements OnInit {
  private readonly days: Weekday[] = ['mon', 'tue', 'wed', 'thu', 'fri'];
  private allEntries: TimetableEntry[] = [];

  selectedDay: Weekday = 'mon';
  selectedCategory = '';
  studio$: Observable<StudioInfo>;

  constructor(
    private timetableService: TimetableService,
    private route: ActivatedRoute,
    studioService: StudioService
  ) {
    this.studio$ = studioService.get();
  }

  ngOnInit(): void {
    this.timetableService.getAll().subscribe((entries) => (this.allEntries = entries));
    this.route.queryParamMap.subscribe((params) => {
      const category = params.get('category') ?? '';
      this.selectedCategory = ['dance', 'pilates'].includes(category) ? category : '';
    });
  }

  get timetableByDay(): TimetableDay[] {
    return this.days.map((day) => {
      const entries = this.allEntries
        .filter((entry) => entry.day === day && this.matchesCategory(entry))
        .sort((a, b) => a.startTime.localeCompare(b.startTime));
      return {
        day,
        periods: [
          { labelKey: 'TIMETABLE_PAGE.MORNING', entries: entries.filter((entry) => entry.startTime < AFTERNOON_START) },
          { labelKey: 'TIMETABLE_PAGE.AFTERNOON', entries: entries.filter((entry) => entry.startTime >= AFTERNOON_START) }
        ]
      };
    });
  }

  onDayChange(day: string): void {
    this.selectedDay = day as Weekday;
  }

  private matchesCategory(entry: TimetableEntry): boolean {
    if (!this.selectedCategory) {
      return true;
    }
    if (this.selectedCategory === 'pilates') {
      return entry.category === 'pilates' || entry.category === 'private';
    }
    return entry.category === this.selectedCategory;
  }
}
