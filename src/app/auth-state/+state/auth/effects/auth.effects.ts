import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import {
  map,
  switchMap,
  withLatestFrom,
  tap,
  switchMapTo,
  pluck,
  catchError,
  mergeMap
} from 'rxjs/operators';

import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../models/auth.models';
import { interval, Observable, of, EMPTY } from 'rxjs';

@Injectable()
export class AuthEffects {
  authStateChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authStateChange),
      pluck('uid'),
      switchMap((uid: firebase.User['uid']) =>
        this.authService
          .getUser$(uid)
          .pipe(
            map((user: User) => AuthActions.authStateAuthenticated({ user }))
          )
      ),
      // map(uid => {
      //   console.log(1, uid);
      //   AuthActions.authStateAuthenticated({} as User);
      // }),
      // map((uid: firebase.User['uid']) =>
      //   uid
      //     ? this.authService
      //         .getUser$(uid)
      //         .pipe(
      //           switchMap((user: User) =>
      //             AuthActions.authStateAuthenticated(user)
      //           )
      //         )
      //     : AuthActions.authStateNotAuthenticated()
      // ),
      // map((fbUser: firebase.User) =>
      //   fbUser
      //     ? this.authService
      //         .getUser$(fbUser.uid)
      //         .pipe(switchMap(user => AuthActions.authStateAuthenticated(user)))
      //     : AuthActions.authStateNotAuthenticated()
      // ),
      tap(console.log)
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {
    authService.observeAuthState();
  }
}
