import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClassCategory, TimetableEntry, Weekday } from '../data/models';
import { TIMETABLE } from '../data/timetable';

@Injectable({ providedIn: 'root' })
export class TimetableService {
  getAll(): Observable<TimetableEntry[]> {
    return of(TIMETABLE);
  }

  getByDay(day: Weekday): Observable<TimetableEntry[]> {
    return of(TIMETABLE.filter((entry) => entry.day === day));
  }

  getByCategory(category: ClassCategory): Observable<TimetableEntry[]> {
    return of(TIMETABLE.filter((entry) => entry.category === category));
  }
}
