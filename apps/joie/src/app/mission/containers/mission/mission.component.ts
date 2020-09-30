import { Component } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { fromEventPattern } from 'rxjs';
import { pluck, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent {
  isLargeBreakpoint$ = fromEventPattern((handler) =>
    window.matchMedia(Breakpoints.Web).addEventListener('change', handler)
  ).pipe(startWith(window.matchMedia(Breakpoints.Web)), pluck('matches'));
}
