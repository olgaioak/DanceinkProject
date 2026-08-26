import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { TimetableService } from '../../services/timetable.service';
import { StudioService } from '../../services/studio.service';
import { StudioInfo, TimetableEntry, Weekday } from '../../data/models';

import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { FilterTabsComponent } from '../../ui/filter-tabs/filter-tabs.component';

interface TimetableDay {
  day: Weekday;
  entries: TimetableEntry[];
}

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

  constructor(private timetableService: TimetableService, studioService: StudioService) {
    this.studio$ = studioService.get();
  }

  ngOnInit(): void {
    this.timetableService.getAll().subscribe((entries) => (this.allEntries = entries));
  }

  get timetableByDay(): TimetableDay[] {
    return this.days.map((day) => ({
      day,
      entries: this.allEntries
        .filter((entry) => entry.day === day && this.matchesCategory(entry))
        .sort((a, b) => a.startTime.localeCompare(b.startTime))
    }));
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
