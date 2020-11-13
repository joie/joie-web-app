import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { SessionsService } from '../../services/sessions/sessions.service';
import { formMatDialogConfig } from '../../account/account-sessions/account-sessions-routing.module';

@Injectable({ providedIn: 'root' })
export class EditDialogConfigResolver implements Resolve<any> {
  constructor(private sessionsService: SessionsService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const { sessionId: id } = route.params;
    return {
      ...formMatDialogConfig,
      data: {
        session: await this.sessionsService
          .getSession(id)
          .pipe(
            take(1),
            // might wanna add an 'iif' operator in fail response
            map((session) => ({ ...session, id })),
          )
          .toPromise(),
      },
    };
  }
}
