import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DanceDetailsComponent } from './pages/dance-details/dance-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dance/:id', component: DanceDetailsComponent }
];