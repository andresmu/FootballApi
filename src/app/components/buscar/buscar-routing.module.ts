import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarListComponent } from './components/buscar-list/buscar-list.component';


const routes: Routes = [
  {
    path: '',
    component: BuscarListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarRoutingModule { }
