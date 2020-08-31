import { Component, OnInit } from '@angular/core';
import { homePillars } from './home-pillars';
import { homeJoieAdvantages } from './home-joie-advantages';

@Component({
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
})
export class HomeDashboardComponent implements OnInit {
  homePillars = homePillars;
  homeJoieAdvantages = homeJoieAdvantages;
  constructor() {}

  ngOnInit(): void {}
}
