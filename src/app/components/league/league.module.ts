import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { LeagueComponent } from './components/league/league.component';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { LeagueRoutingModule } from './league-routing.module';


@NgModule({
  declarations: [
    LeagueComponent,
    LeagueListComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule
  ],
  exports: [
    LeagueListComponent,
    LeagueComponent
  ]
})
export class LeagueModule { }
