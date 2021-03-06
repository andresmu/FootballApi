import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../../models/country';
import { Api } from '../../models/response/Api';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getAllCoutries() {
   return this.http.get<Api<Country>>(`${environment.API}/countries`);
  }
}
