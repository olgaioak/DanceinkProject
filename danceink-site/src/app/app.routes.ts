import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DanceListComponent } from './pages/dance-list/dance-list.component';
import { DanceDetailsComponent } from './pages/dance-details/dance-details.component';
import { PilatesComponent } from './pages/pilates/pilates.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { EventsComponent } from './pages/events/events.component';
import { StudioComponent } from './pages/studio/studio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dance', component: DanceListComponent },
  { path: 'dance/:id', component: DanceDetailsComponent },
  { path: 'pilates', component: PilatesComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'events', component: EventsComponent },
  { path: 'studio', component: StudioComponent }
];
