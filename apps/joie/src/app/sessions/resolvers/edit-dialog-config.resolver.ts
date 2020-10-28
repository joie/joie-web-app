import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { SessionsFacade } from '../../services/sessions.facade';
import { formMatDialogConfig } from '../../account/account-sessions/account-sessions-routing.module';

@Injectable({ providedIn: 'root' })
export class EditDialogConfigResolver implements Resolve<any> {
  constructor(private sessionsFacade: SessionsFacade) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return {
      ...formMatDialogConfig,
      data: {
        sessionId: route.params.sessionId,
        session: await this.sessionsFacade
          .getSession(route.params.sessionId)
          .pipe(take(1))
          .toPromise(),
      },
    };
  }
}
