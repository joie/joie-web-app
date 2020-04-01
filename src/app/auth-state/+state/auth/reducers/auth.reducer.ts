import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from '../models/auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  user: User;
  loaded: boolean;
  error?: any;
}

export const initialState: State = {
  user: undefined,
  loaded: false
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.loadAuth, (state): State => ({ ...state, loaded: false })),
  on(
    AuthActions.loadAuthSuccess,
    (state, { user }): State => ({ ...state, user, loaded: true })
  ),
  on(
    AuthActions.loadAuthFailure,
    (state, { error }): State => ({ ...state, error, loaded: true })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
