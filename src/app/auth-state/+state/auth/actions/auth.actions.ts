import { createAction, props } from '@ngrx/store';
import * as fromReducer from '../reducers/auth.reducer';
import { User } from '../models/auth.models';

// export const loadAuth = createAction('[Auth] Load Auth');

// export const loadAuthSuccess = createAction(
//   '[Auth] Load Auth Success',
//   props<Pick<fromReducer.State, 'user'>>()
// );

// export const loadAuthFailure = createAction(
//   '[Auth] Load Auth Failure',
//   props<Pick<fromReducer.State, 'error'>>()
// );

export const authStateChange = createAction(
  '[Auth] State Change',
  props<{ uid: User['uid'] } | null>()
);

export const authStateAuthenticated = createAction(
  '[Auth] State Authenticated',
  props<{ user: User }>()
);

export const authStateNotAuthenticated = createAction(
  '[Auth] State Not Authenticated'
);

// export const signOut = createAction('[Auth] Sign Out');
