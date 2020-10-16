import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './components/player/player.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerRoutingModule } from './player-routing.module';


@NgModule({
  declarations: [
      PlayerComponent,
      PlayerListComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule
  ],
  exports: [
    PlayerComponent,
    PlayerListComponent
  ]
})
export class PlayerModule { }
