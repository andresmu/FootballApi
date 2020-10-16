import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries = [];

  constructor(private episodesService: CountriesService) {

   }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(){
    this.countries = [];
    this.episodesService.getAllCoutries().pipe(take(1)).subscribe(
      response => {
        this.countries = response.api.countries;
      },
      err => {
        console.log(err);
      },
      () => {
          //petición finalizada
      });
  }
}
