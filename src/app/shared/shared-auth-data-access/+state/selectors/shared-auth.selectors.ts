import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSharedAuth from '../reducers/shared-auth.reducer';

export const selectSharedAuthState = createFeatureSelector<
  fromSharedAuth.State
>(fromSharedAuth.sharedAuthFeatureKey);
