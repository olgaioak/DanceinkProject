import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PilatesProgram } from '../data/models';
import { PILATES_PROGRAMS } from '../data/pilates';

@Injectable({ providedIn: 'root' })
export class PilatesService {
  getAll(): Observable<PilatesProgram[]> {
    return of(PILATES_PROGRAMS);
  }

  getById(id: PilatesProgram['id']): Observable<PilatesProgram | undefined> {
    return of(PILATES_PROGRAMS.find((program) => program.id === id));
  }
}
