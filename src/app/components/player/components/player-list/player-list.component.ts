import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PlayersService } from 'src/app/core/services/players/players.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  loading: boolean = true;
  havePlayers: boolean = true;
  message: string;
  players = [];
  totalPlayers: string;
  season: number;

  constructor(public location: Location, private playerServices: PlayersService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(routeParams => {
      this.getPlayersByTeamSeason(routeParams.team, routeParams.season);
      this.season = routeParams.season;
  
    });
  }

  public getPlayersByTeamSeason(teamId: number, season: number){
    this.playerServices.getSquadByTeamSeason(teamId, season)
    .pipe(
      take(1)
    )
    .subscribe(
      res => {
        this.totalPlayers = res.api.results.toString();
        this.players = res.api.players;
        if (this.players.length > 0) {
          this.havePlayers = true;
        }else{
          this.havePlayers = false;
          this.message = 'No hay jugadores de este plantel registrados en esta API.'
        }
        this.loading = false;
        console.log('Done' + this.season);
      },
      err => {
        console.log(err);
      },
      () => {
          // petición finalizada
      });
  }

}
