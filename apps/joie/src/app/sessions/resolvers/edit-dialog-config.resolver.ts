import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import { SessionsFacade } from '../../services/sessions.facade';

@Injectable({ providedIn: 'root' })
export class EditDialogConfigResolver implements Resolve<any> {
  constructor(private sessionsFacade: SessionsFacade) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return {
      panelClass: 'dialog-as-drawer',
      width: '100%',
      maxWidth: 900,
      position: {
        right: '0px',
      },
      data: {
        sessionId: route.params.sessionId,
        session: await this.sessionsFacade.getSession(route.params.sessionId).pipe(take(1)).toPromise()
      },
    };
  }
}
