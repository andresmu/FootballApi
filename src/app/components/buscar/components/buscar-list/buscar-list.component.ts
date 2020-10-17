import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamsService } from 'src/app/core/services/teams/teams.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-buscar-list',
  templateUrl: './buscar-list.component.html',
  styleUrls: ['./buscar-list.component.css']
})
export class BuscarListComponent implements OnInit {

  text: string;
  loading: boolean = true;
  haveTeams: boolean = true;
  message: string;
  teams = [];
  totalTeams: string;

  constructor(public location: Location, private teamServices: TeamsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(routeParams => {
      this.text = routeParams.texto.replace(' ', '_');
      this.getTeamsBySearch(routeParams.texto);
    });
  }

  public getTeamsBySearch(text: string){
    this.teamServices.searchTeam(text)
    .pipe(
      take(1)
    )
    .subscribe(
      res => {
        this.totalTeams = res.api.results.toString();
        this.teams = res.api.teams;
        this.loading = false;
        if (this.teams.length > 0) {
          this.haveTeams = true;
        }else{
          this.haveTeams = false;
          this.message = 'No se encuentran Equipos registrados con el termino: .'
        }
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
