import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/core/models/team';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  
  @Input() team: Team;
  constructor() { }

  ngOnInit() {
  }

}
