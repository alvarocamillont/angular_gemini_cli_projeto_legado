import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'digimons',
    loadComponent: () => import('./digimon-list/digimon-list').then(m => m.DigimonList)
  },
  {
    path: '',
    redirectTo: '/digimons',
    pathMatch: 'full'
  }
];
