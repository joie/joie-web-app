import { Component } from '@angular/core';
import { homePillars } from './home-pillars';
import { homeJoieAdvantages } from './home-joie-advantages';

@Component({
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
})
export class HomeDashboardComponent {
  homePillars = homePillars;
  homeJoieAdvantages = homeJoieAdvantages;
  layoutClass =
    'layout-grid layout-grid-inline-features layout-spacing-inline-md layout-spacing-block-md';
}
