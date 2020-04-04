import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromActions from '../actions/auth.actions';
import * as fromAuth from '../reducers/auth.reducer';
import * as AuthSelectors from '../selectors/auth.selectors';

@Injectable()
export class AuthFacade {
  user$ = this.store.pipe(select(AuthSelectors.getAuthUser));
  loaded$ = this.store.pipe(select(AuthSelectors.getAuthLoaded));
  error$ = this.store.pipe(select(AuthSelectors.getAuthError));

  constructor(private store: Store<fromAuth.State>) {}

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

  dispatchStateChange(payload: { uid: firebase.User['uid'] } | null) {
    this.dispatch(fromActions.authStateChange(payload));
  }
}
