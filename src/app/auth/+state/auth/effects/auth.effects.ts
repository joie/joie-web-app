import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
// import { fetch } from '@nrwl/angular';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';

// import * as fromAuth from '../reducers/auth.reducer';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../models/auth.models';

@Injectable()
export class AuthEffects {
  loadAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadAuth),
      exhaustMap(() =>
        this.authService.state$.pipe(
          map(({ uid, displayName, email, phoneNumber, photoURL }: User) =>
            AuthActions.loadAuthSuccess({
              user: { uid, displayName, email, phoneNumber, photoURL }
            })
          ),
          catchError(error => of(AuthActions.loadAuthFailure({ error })))
        )
      )
    )
  );

  ngrxOnInitEffects(): Action {
    return AuthActions.loadAuth();
  }

  constructor(private actions$: Actions, private authService: AuthService) {}
}
