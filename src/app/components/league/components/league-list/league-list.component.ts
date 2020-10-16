import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LeaguesService } from 'src/app/core/services/leagues/leagues.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css']
})
export class LeagueListComponent implements OnInit {

  loading: boolean = true;
  leagues = [];
  totalLeagues: string;

  constructor(private leaguesService: LeaguesService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(routeParams => {
      this.getLeaguesByCountry(routeParams.code);
    });
  }

  public getLeaguesByCountry(code: string) {
      this.leaguesService.getLeaguesByCountry(code)
        .pipe(
          take(1)
        )
        .subscribe(
          res => {
            this.totalLeagues = res.api.results.toString();
            this.leagues = res.api.leagues;
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
