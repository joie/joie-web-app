import { Action, createReducer, on } from '@ngrx/store';
import * as SharedAuthActions from '../actions/shared-auth.actions';

export const sharedAuthFeatureKey = 'auth';

export interface State {}

export const initialState: State = {};

const sharedAuthReducer = createReducer(
  initialState,

  on(SharedAuthActions.loadSharedAuths, state => state),
  on(SharedAuthActions.loadSharedAuthsSuccess, (state, action) => state),
  on(SharedAuthActions.loadSharedAuthsFailure, (state, action) => state)
);

export function reducer(state: State | undefined, action: Action) {
  return sharedAuthReducer(state, action);
}
