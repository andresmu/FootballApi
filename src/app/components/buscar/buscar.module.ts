import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BuscarRoutingModule } from './buscar-routing.module';
import { BuscarComponent } from './components/buscar/buscar.component';
import { BuscarListComponent } from './components/buscar-list/buscar-list.component';


@NgModule({
  declarations: [
    BuscarComponent,
    BuscarListComponent
  ],
  imports: [
    CommonModule,
    BuscarRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    BuscarComponent,
    BuscarListComponent
  ]
})
export class BuscarModule { }
