import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '../../environments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthStateModule } from '../auth-state/auth-state.module';
import { UserControlComponent } from './user-control/user-control.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [UserControlComponent, PageNotFoundComponent],
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
    AuthStateModule
  ],
  exports: [UserControlComponent, PageNotFoundComponent]
})
export class CoreModule {}
