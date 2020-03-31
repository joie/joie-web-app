import { createAction, props } from '@ngrx/store';
import * as fromReducer from '../reducers/auth.reducer';

export const loadAuth = createAction('[Auth] Load Auth');

export const loadAuthSuccess = createAction(
  '[Auth] Load Auth Success',
  props<Pick<fromReducer.State, 'user'>>()
);

export const loadAuthFailure = createAction(
  '[Auth] Load Auth Failure',
  props<Pick<fromReducer.State, 'error'>>()
);
