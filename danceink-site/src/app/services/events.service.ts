import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArchivePhoto, EventCategory, StudioEvent } from '../data/models';
import { ARCHIVE_MORE_COUNT, ARCHIVE_PHOTOS, EVENTS } from '../data/events';

@Injectable({ providedIn: 'root' })
export class EventsService {
  getAll(): Observable<StudioEvent[]> {
    return of(EVENTS);
  }

  getFeatured(): Observable<StudioEvent | undefined> {
    return of(EVENTS.find((event) => event.featured));
  }

  getByCategory(category: EventCategory): Observable<StudioEvent[]> {
    return of(EVENTS.filter((event) => event.category === category));
  }

  getArchivePhotos(): Observable<ArchivePhoto[]> {
    return of(ARCHIVE_PHOTOS);
  }

  getArchiveMoreCount(): Observable<number> {
    return of(ARCHIVE_MORE_COUNT);
  }
}
