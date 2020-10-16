import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/core/models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() team: Team;
  constructor() { }

  ngOnInit() {

  }

}
