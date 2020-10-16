import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TeamsService } from 'src/app/core/services/teams/teams.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  loading: boolean = true;
  teams = [];
  totalTeams: string;


  constructor(public location: Location, private teamServices: TeamsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(routeParams => {
      this.getTeamsByLeague(routeParams.league);
    });
  }

  public getTeamsByLeague(leagueId: number){
    this.teamServices.getTeamsByLeague(leagueId)
    .pipe(
      take(1)
    )
    .subscribe(
      res => {
        this.totalTeams = res.api.results.toString();
        this.teams = res.api.leagues;
        this.loading = false;
        console.log('Done');
      },
      err => {
        console.log(err);
      },
      () => {
          // petición finalizada
      });
  }
}
