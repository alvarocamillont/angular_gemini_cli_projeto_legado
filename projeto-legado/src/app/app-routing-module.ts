import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonList } from './digimon-list/digimon-list';

const routes: Routes = [
  {
    path: 'digimons',
    component: DigimonList
  },
  {
    path: '',
    redirectTo: '/digimons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
