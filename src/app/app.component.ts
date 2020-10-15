import { Component } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FootballApi';

  movies = [];

  constructor(private episodesService: CountriesService) { 
    // this.movies = [];
    // this.episodesService.getAllCoutries().pipe(take(1)).subscribe(
    //   response => {
    //     this.movies = response.api.countries;
    //   },
    //   err => {
    //     console.log(err);
    //   },
    //   () => {
    //       //petición finalizada
    //   });

  }

}
