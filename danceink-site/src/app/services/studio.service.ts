import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudioInfo } from '../data/models';
import { STUDIO } from '../data/studio';

@Injectable({ providedIn: 'root' })
export class StudioService {
  get(): Observable<StudioInfo> {
    return of(STUDIO);
  }
}
