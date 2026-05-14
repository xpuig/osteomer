import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TeamComponent } from './features/team/team.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'equipo',
    component: TeamComponent,
    data: { animation: 'team' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
