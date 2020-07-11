import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  getUrlTree(redirectUrl: string) {
    return this.router.createUrlTree(
      [
        {
          outlets: {
            popup: ['auth', 'log-in'],
          },
        },
      ],
      { queryParams: { redirectUrl }, skipLocationChange: true }
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    console.log(state.url, this.getUrlTree(state.url));
    return this.afAuth.authState.pipe(
      map((user) => Boolean(user) || this.getUrlTree(state.url))
    );
  }
}
