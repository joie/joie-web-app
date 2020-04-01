import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth/reducers/auth.reducer';
import { AuthEffects } from './+state/auth/effects/auth.effects';
import { AuthFacade } from './+state/auth/facades/auth.facade';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthFacade, AuthService]
})
export class AuthStateModule {}
