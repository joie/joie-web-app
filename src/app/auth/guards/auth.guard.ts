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
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  redirectToLogin(redirectUrl: string) {
    this.router.navigate(
      [
        {
          outlets: {
            popup: ['auth', 'log-in'],
          },
        },
      ],
      { skipLocationChange: true, queryParams: { redirectUrl } }
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.afAuth.authState.pipe(
      tap((user) => (state.url && user) ?? this.redirectToLogin(state.url)),
      map(Boolean)
    );
  }
}
