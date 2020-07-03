import { NgModule } from '@angular/core';

import { environment } from '../../environments/environment';

import {MatTabsModule} from '@angular/material/tabs';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthStateModule } from '../auth-state/auth-state.module';
import { UserControlComponent } from './components/user-control/user-control.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserControlComponent, PageNotFoundComponent, HeaderComponent],
  imports: [
    RouterModule,
    SharedModule,
    MatTabsModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AuthStateModule,
  ],
  exports: [UserControlComponent, PageNotFoundComponent, HeaderComponent],
})
export class CoreModule {}
