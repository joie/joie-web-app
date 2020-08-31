import { Component, OnInit } from '@angular/core';
import { homePillars } from './home-pillars';

@Component({
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
})
export class HomeDashboardComponent implements OnInit {
  homePillars = homePillars;

  constructor() {}

  ngOnInit(): void {}
}
