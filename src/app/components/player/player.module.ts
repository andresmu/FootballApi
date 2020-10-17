import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { PlayerComponent } from './components/player/player.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerRoutingModule } from './player-routing.module';
import { PlayersService } from 'src/app/core/services/players/players.service';

import { RemovewhitespacesPipe } from 'src/app/core/pipes/removewhitespaces.pipe';


@NgModule({
  declarations: [
      PlayerComponent,
      PlayerListComponent,
      RemovewhitespacesPipe
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    PlayerComponent,
    PlayerListComponent
  ],
  providers: [
    PlayersService
  ]
})
export class PlayerModule { }
