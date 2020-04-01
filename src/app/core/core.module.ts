import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '../../environments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthModule } from '../auth/auth.module';
import { UserControlComponent } from './user-control/user-control.component';

@NgModule({
  declarations: [UserControlComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AuthModule
  ],
  exports: [UserControlComponent]
})
export class CoreModule {}
