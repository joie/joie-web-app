import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionFormResolverService implements Resolve<any> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    //todo replace any to Session when form is ready

    //todo when db added, fetch from there in appropriate cases
    let { session } = history.state || null;

    if (!session) {
      let sessionDraftStr = localStorage.getItem('sessionDraft');
      if (sessionDraftStr) {
        session = JSON.parse(sessionDraftStr);
      }
    }
    return session ? session : {};
  }
}
