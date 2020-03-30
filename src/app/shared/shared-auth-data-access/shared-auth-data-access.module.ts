import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromSharedAuth from './+state/reducers/shared-auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SharedAuthEffects } from './+state/effects/shared-auth.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(
      fromSharedAuth.sharedAuthFeatureKey,
      fromSharedAuth.reducer
    ),
    EffectsModule.forFeature([SharedAuthEffects])
  ]
})
export class SharedAuthDataAccessModule {}
