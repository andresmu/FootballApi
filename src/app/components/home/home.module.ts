import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CountryComponent } from './components/country/country.component';


@NgModule({
  declarations: [
    HomeComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
   
  ]
})
export class HomeModule { }
