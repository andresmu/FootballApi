import { Component } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { take } from 'rxjs/operators';
import { Api } from './core/models/response/Api';
import { Country } from './core/models/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FootballApi';

  test = new Api();
  movies = [];

  constructor(private episodesService: CountriesService) { 
    this.movies = [];
    this.episodesService.getAllCoutries().pipe(take(1)).subscribe(
      response => {
        this.test = response.api.countries;
        this.movies = response.api.countries;
      },
      err => {
        console.log(err);
      },
      () => {
          //petición finalizada
      });

  }

}
