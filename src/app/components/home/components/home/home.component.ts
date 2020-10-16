import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public viewCount = 20;
  totalCountries = 0;
  countries = [];
  countriesList = [];

  constructor(private countriesService: CountriesService) {

   }

  ngOnInit() {
    this.getCountries();
  }

  public changeViewMovie() {
    this.countries = [];
    this.countries = this.countriesList.slice(0, this.viewCount);
  }

  getCountries(){
    this.countries = [];
    this.countriesService.getAllCoutries().pipe(take(1)).subscribe(
      response => {
        this.countriesList = response.api.countries;
        this.totalCountries = response.api.results;
        this.countries = response.api.countries.slice(0, this.viewCount);
      },
      err => {
        console.log(err);
      },
      () => {
          //petición finalizada
      });
  }
}
