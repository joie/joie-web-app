import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { SessionsService } from '../../services/sessions/sessions.service';

@Injectable({ providedIn: 'root' })
export class EnrollDialogConfigResolver implements Resolve<any> {
  constructor(private sessionsService: SessionsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return {
      width: '680px',
      data: {
        session$: this.sessionsService.getSession(route.params.sessionId),
        sessionId: route.params.sessionId,
      },
    };
  }
}
