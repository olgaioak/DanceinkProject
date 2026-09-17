import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';

import { DanceService } from '../../services/dance.service';
import { PilatesService } from '../../services/pilates.service';
import { TimetableService } from '../../services/timetable.service';
import { EventsService } from '../../services/events.service';
import { DanceDiscipline, PilatesProgram, StudioEvent, TimetableEntry, Weekday } from '../../data/models';

import { ButtonDirective } from '../../ui/button/button.directive';
import { AgeRangePipe } from '../../ui/age-range/age-range.pipe';
import { TeaserPanelComponent } from './teaser-panel/teaser-panel.component';

interface TimetableDayPreview {
  day: Weekday;
  entries: TimetableEntry[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ButtonDirective,
    AgeRangePipe,
    TeaserPanelComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Hidden for now (no events content yet) — set back to true to bring it back, nothing else to change.
  showNextOnStage = false;

  private readonly previewDays: Weekday[] = ['mon', 'tue', 'wed', 'thu'];

  dances$: Observable<DanceDiscipline[]>;
  pilatesPrograms$: Observable<PilatesProgram[]>;
  timetablePreview$: Observable<TimetableDayPreview[]>;
  featuredEvent$: Observable<StudioEvent | undefined>;

  constructor(
    danceService: DanceService,
    pilatesService: PilatesService,
    timetableService: TimetableService,
    eventsService: EventsService
  ) {
    this.dances$ = danceService.getAll();
    this.pilatesPrograms$ = pilatesService.getAll();
    this.featuredEvent$ = eventsService.getFeatured();

    this.timetablePreview$ = timetableService.getAll().pipe(
      map((entries) =>
        this.previewDays.map((day) => ({
          day,
          entries: entries
            .filter((entry) => entry.day === day)
            .sort((a, b) => a.startTime.localeCompare(b.startTime))
        }))
      )
    );
  }
}
