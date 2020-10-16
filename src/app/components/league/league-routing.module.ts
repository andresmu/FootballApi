import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeagueListComponent } from './components/league-list/league-list.component';


const routes: Routes = [
  {
    path: '',
    component: LeagueListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
