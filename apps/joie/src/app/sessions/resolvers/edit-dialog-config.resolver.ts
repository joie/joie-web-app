import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import { SessionsFacade } from '../../services/sessions.facade';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EditDialogConfigResolver implements Resolve<any> {
  constructor(private sessionsFacade: SessionsFacade) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return {
      panelClass: 'dialog-as-drawer',
      width: '100%',
      maxWidth: 900,
      position: {
        right: '0px',
      },
      data: {
        session$: this.sessionsFacade.getSession(route.params.sessionId),
      },
    };
  }
}
