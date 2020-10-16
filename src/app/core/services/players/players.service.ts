import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Player } from '../../models/player';
import { Api } from '../../models/response/Api';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getSquadByTeamSeason(teamId: number, season: number) {
    return this.http.get<any>(`${environment.API}/players/squad/${teamId}/${season}`);
   }

}
