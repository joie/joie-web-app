import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { SessionsService } from '../../services/sessions/sessions.service';
import { formMatDialogConfig } from '../../account/account-sessions/account-sessions-routing.module';

@Injectable({ providedIn: 'root' })
export class EditDialogConfigResolver implements Resolve<any> {
  constructor(private sessionsService: SessionsService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return {
      ...formMatDialogConfig,
      data: {
        sessionId: route.params.sessionId,
        session: await this.sessionsService
          .getSession(route.params.sessionId)
          .pipe(take(1))
          .toPromise(),
      },
    };
  }
}
