import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromAuth from '../reducers/auth.reducer';
import * as AuthSelectors from '../selectors/auth.selectors';

@Injectable()
export class AuthFacade {
  user$ = this.store.pipe(select(AuthSelectors.getAuthUser));
  loaded$ = this.store.pipe(select(AuthSelectors.getAuthLoaded));
  error$ = this.store.pipe(select(AuthSelectors.getAuthError));

  constructor(private store: Store<fromAuth.State>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
