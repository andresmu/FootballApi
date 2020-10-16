import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TeamComponent } from './components/team/team.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamRoutingModule } from './team-routing.module';


@NgModule({
  declarations: [
    TeamComponent,
    TeamListComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    TeamComponent,
    TeamListComponent
  ]
})
export class TeamModule { }
