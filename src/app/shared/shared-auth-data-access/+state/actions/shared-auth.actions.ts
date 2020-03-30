import { createAction, props } from '@ngrx/store';

export const loadSharedAuths = createAction(
  '[SharedAuth] Load SharedAuths'
);

export const loadSharedAuthsSuccess = createAction(
  '[SharedAuth] Load SharedAuths Success',
  props<{ data: any }>()
);

export const loadSharedAuthsFailure = createAction(
  '[SharedAuth] Load SharedAuths Failure',
  props<{ error: any }>()
);
