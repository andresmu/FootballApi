import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { LeagueComponent } from './components/league/league.component';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { LeagueRoutingModule } from './league-routing.module';
import { LeaguesService } from 'src/app/core/services/leagues/leagues.service';


@NgModule({
  declarations: [
    LeagueListComponent,
    LeagueComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    LeagueListComponent,
    LeagueComponent
  ],
  providers: [
    LeaguesService
  ]
})
export class LeagueModule { }
