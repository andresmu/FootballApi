import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { League } from '../../models/league/league';
import { Api } from '../../models/response/Api';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor(private http: HttpClient) { }

  getAllLeagues() {
    return this.http.get<any>(`${environment.API}/leagues/type/league/2020`);
   }

  getLeaguesByCountry(countryCode: string, season?: number) {
    console.log(`${environment.API}/leagues/country/${countryCode}/${season}`);
    if (season !== undefined && season !== null && season !== 0) {
      return this.http.get<any>(`${environment.API}/leagues/country/${countryCode}/${season}`);
    }else{
      console.log('IAPI y ILeague');
      return this.http.get<Api<League>>(`${environment.API}/leagues/country/${countryCode}`);
    }
   }
}
