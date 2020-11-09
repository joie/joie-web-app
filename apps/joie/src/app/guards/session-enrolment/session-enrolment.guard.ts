import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import get from 'lodash.get';
import { SessionsService } from './../../services/sessions/sessions.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionEnrolmentGuard implements CanActivate {
  constructor(private sessionsService: SessionsService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot,
  ): Promise<boolean> | boolean | Observable<boolean> {
    const sessionId = get(route, 'params.sessionId');

    return this.sessionsService.sessionEnrolment(sessionId).pipe(
      map((enrolment) => {
        return !(enrolment && enrolment.sessionId === sessionId);
      }),
    );
  }
}
