import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import { SessionsFacade } from 'src/app/services/sessions.facade';

@Injectable({ providedIn: 'root' })
export class EnrollDialogConfigResolver implements Resolve<any> {
  constructor(private sessionsFacade: SessionsFacade) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return {
      width: '680px',
      data: {
        session$: this.sessionsFacade.getSession(route.params.sessionId),
      },
    };
  }
}
