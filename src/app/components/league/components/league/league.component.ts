import { Component, OnInit, Input } from '@angular/core';
import { League } from 'src/app/core/models/league/league';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  @Input() league: League;

  constructor() { }

  ngOnInit() {
  }

}
