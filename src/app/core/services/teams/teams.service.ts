import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Team } from '../../models/team';
import { Api } from '../../models/response/Api';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeamsByLeague(leagueId: number) {
    return this.http.get<Api<Team>>(`${environment.API}/teams/league/${leagueId}`);
   }

   getTeamsDetail(teamId: number) {
    return this.http.get<Api<Team>>(`${environment.API}/teams/team/${teamId}`);
   }
   searchTeam(text: string){
    return this.http.get<Api<Team>>(`${environment.API}/teams/search/${text}`);
   }

}
