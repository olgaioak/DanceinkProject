import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DanceDiscipline } from '../data/models';
import { DANCES } from '../data/dances';

@Injectable({ providedIn: 'root' })
export class DanceService {
  getAll(): Observable<DanceDiscipline[]> {
    return of(DANCES);
  }

  getById(id: string): Observable<DanceDiscipline | undefined> {
    return of(DANCES.find((discipline) => discipline.id === id));
  }
}
