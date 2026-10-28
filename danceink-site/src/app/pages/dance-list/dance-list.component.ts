import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { DanceService } from '../../services/dance.service';
import { StudioService } from '../../services/studio.service';
import { TimetableService } from '../../services/timetable.service';
import { AgeGroup, DanceDiscipline, StudioInfo, TimetableEntry, Weekday } from '../../data/models';

import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { ImagePlaceholderComponent } from '../../ui/image-placeholder/image-placeholder.component';
import { FilterTabsComponent } from '../../ui/filter-tabs/filter-tabs.component';
import { AgeRangePipe } from '../../ui/age-range/age-range.pipe';
import { SplitCtaPanelComponent } from '../../ui/split-cta/split-cta-panel.component';

interface DaySchedule {
  day: Weekday;
  times: string[];
}

const WEEK: Weekday[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

@Component({
  selector: 'app-dance-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SectionEyebrowComponent,
    ButtonDirective,
    BadgeComponent,
    ImagePlaceholderComponent,
    FilterTabsComponent,
    AgeRangePipe,
    SplitCtaPanelComponent
  ],
  templateUrl: './dance-list.component.html',
  styleUrl: './dance-list.component.css'
})
export class DanceListComponent implements OnInit {
  private allDances: DanceDiscipline[] = [];

  selectedAgeFilter: AgeGroup | '' = '';
  studio$: Observable<StudioInfo>;
  /** Each dance's class days and start times, taken from the timetable. */
  scheduleByDance: Record<string, DaySchedule[]> = {};

  constructor(
    private danceService: DanceService,
    private timetableService: TimetableService,
    studioService: StudioService
  ) {
    this.studio$ = studioService.get();
  }

  ngOnInit(): void {
    this.danceService.getAll().subscribe((dances) => {
      this.allDances = [...dances].sort((a, b) => a.order - b.order);
    });
    this.timetableService.getAll().subscribe((entries) => {
      this.scheduleByDance = this.groupByDance(entries);
    });
  }

  get filteredDances(): DanceDiscipline[] {
    if (!this.selectedAgeFilter) {
      return this.allDances;
    }
    return this.allDances.filter((dance) => dance.ageGroups.includes(this.selectedAgeFilter as AgeGroup));
  }

  onAgeFilterChange(value: string): void {
    this.selectedAgeFilter = value as AgeGroup | '';
  }

  private groupByDance(entries: TimetableEntry[]): Record<string, DaySchedule[]> {
    const byDance: Record<string, DaySchedule[]> = {};
    const sorted = [...entries].sort(
      (a, b) => WEEK.indexOf(a.day) - WEEK.indexOf(b.day) || a.startTime.localeCompare(b.startTime)
    );
    for (const entry of sorted) {
      if (!entry.linkTo) {
        continue;
      }
      const days = (byDance[entry.linkTo] ??= []);
      const last = days[days.length - 1];
      if (last?.day === entry.day) {
        last.times.push(entry.startTime);
      } else {
        days.push({ day: entry.day, times: [entry.startTime] });
      }
    }
    return byDance;
  }
}
