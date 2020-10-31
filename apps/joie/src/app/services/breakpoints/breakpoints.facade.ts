import { Injectable } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { fromEventPattern } from 'rxjs';
import { pluck, shareReplay, startWith } from 'rxjs/operators';

const breakpointObservableFactory = (name: string) =>
  fromEventPattern((handler) =>
    window.matchMedia(Breakpoints[name]).addEventListener('change', handler)
  ).pipe(startWith(window.matchMedia(Breakpoints[name])), pluck('matches'), shareReplay(1));

@Injectable({
  providedIn: 'root',
})
export class BreakpointsFacade {
  isBreakpointWeb$ = breakpointObservableFactory('Web');
  isBreakpointMedium$ = breakpointObservableFactory('Medium');
  isBreakpointSmall$ = breakpointObservableFactory('Small');
}
