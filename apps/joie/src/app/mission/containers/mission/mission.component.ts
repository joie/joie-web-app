import { Component } from '@angular/core';
import { BreakpointsFacade } from '../../../services/breakpoints/breakpoints.facade';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent {
  constructor(public breakpoints: BreakpointsFacade) {}
}
