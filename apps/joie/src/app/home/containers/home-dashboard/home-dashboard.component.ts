import { Component } from '@angular/core';
import { BreakpointsFacade } from '../../../services/breakpoints/breakpoints.facade';
import { homeJoieAdvantages } from './home-joie-advantages';

@Component({
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
})
export class HomeDashboardComponent {
  homeJoieAdvantages = homeJoieAdvantages;
  // TODO - default assignment will be removed after integration
  // entryId = '1_0v7lxhb8';

  constructor(public breakpoints: BreakpointsFacade) {}
}
