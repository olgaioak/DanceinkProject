import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { EventsService } from '../../services/events.service';
import { ArchivePhoto, StudioEvent } from '../../data/models';

import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { ImagePlaceholderComponent } from '../../ui/image-placeholder/image-placeholder.component';
import { FilterTabsComponent } from '../../ui/filter-tabs/filter-tabs.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    SectionEyebrowComponent,
    ButtonDirective,
    ImagePlaceholderComponent,
    FilterTabsComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  private allEvents: StudioEvent[] = [];

  selectedFilter = '';
  archivePhotos$: Observable<ArchivePhoto[]>;
  archiveMoreCount$: Observable<number>;

  constructor(private eventsService: EventsService) {
    this.archivePhotos$ = eventsService.getArchivePhotos();
    this.archiveMoreCount$ = eventsService.getArchiveMoreCount();
  }

  ngOnInit(): void {
    this.eventsService.getAll().subscribe((events) => (this.allEvents = events));
  }

  get featuredEvent(): StudioEvent | undefined {
    return this.allEvents.find((event) => event.featured);
  }

  get filteredEvents(): StudioEvent[] {
    return this.allEvents.filter((event) => !event.featured && this.matchesFilter(event));
  }

  private matchesFilter(event: StudioEvent): boolean {
    if (!this.selectedFilter) {
      return true;
    }
    if (/^\d{4}$/.test(this.selectedFilter)) {
      return event.year === Number(this.selectedFilter);
    }
    return event.category === this.selectedFilter;
  }
}
