import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TeamsService } from 'src/app/core/services/teams/teams.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Team } from 'src/app/core/models/team';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  
  loading: boolean = true;
  public teams = null;
  totalTeams: string;
  season: number;

  test: string;
  constructor(public location: Location, private teamServices: TeamsService, private router: ActivatedRoute) { 

  }

  ngOnInit() {
    this.router.params.subscribe(routeParams => {
      this.getTeamById(routeParams.teamId);
    });

    this.test = 'olaas';
  }

  public getTeamById(teamId: number){
    this.teamServices.getTeamsDetail(teamId)
    .pipe(
      take(1)
    )
    .subscribe(
      res => {
        this.totalTeams = res.api.results.toString();
        this.teams = res.api.teams;
        this.loading = false;
      },
      err => {
        console.log(err);
      },
      () => {
          // petición finalizada
      });
  }

}
