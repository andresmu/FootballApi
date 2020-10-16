import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public viewCount = 20;
  totalConutries = 0;
  countries = [];
  countriesList = [];

  constructor(private episodesService: CountriesService, private router: ActivatedRoute) {

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
    this.episodesService.getAllCoutries().pipe(take(1)).subscribe(
      response => {
        this.countriesList = response.api.countries;
        this.totalConutries = response.api.results;
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
