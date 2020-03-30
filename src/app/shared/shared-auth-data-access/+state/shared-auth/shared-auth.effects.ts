import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from './node_modules/@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SharedAuthActions from '../../actions/shared-auth/shared-auth.actions';

@Injectable()
export class SharedAuthEffects {
  loadSharedAuths$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedAuthActions.loadSharedAuths),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SharedAuthActions.loadSharedAuthsSuccess({ data })),
          catchError(error =>
            of(SharedAuthActions.loadSharedAuthsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
