import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';

import { TeamDetailRoutingModule } from './team-detail-routing.module';


@NgModule({
  declarations: [
    TeamDetailComponent
  ],
  imports: [
    CommonModule,
    TeamDetailRoutingModule
  ],
  exports: [
    TeamDetailComponent
  ]
})
export class TeamDetailModule { }
