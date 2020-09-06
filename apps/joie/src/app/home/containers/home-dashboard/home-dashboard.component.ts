import { Component } from '@angular/core';
import { pillars } from './pillars';
import { homeJoieAdvantages } from './home-joie-advantages';

@Component({
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
})
export class HomeDashboardComponent {
  pillars = pillars;
  homeJoieAdvantages = homeJoieAdvantages;
  layoutClass =
    'layout-grid layout-grid-inline-features layout-spacing-inline-md layout-spacing-block-md';
  // TODO - default assignment will be removed after integration
  entryId = '1_0v7lxhb8';
}
