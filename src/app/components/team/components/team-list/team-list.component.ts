import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TeamsService } from 'src/app/core/services/teams/teams.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { trigger, transition, query, stagger, animate, style} from '@angular/animations';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0}),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], {optional: true })
      ])
    ])
  ]
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
        this.teams = res.api.teams;
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
