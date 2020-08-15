import { NgModule } from '@angular/core';

import { environment } from '../../environments/environment';

import { MatTabsModule } from '@angular/material/tabs';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthStateModule } from '../auth-state/auth-state.module';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserLinksComponent } from './components/user-links/user-links.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    NavigationComponent,
    UserLinksComponent,
    SearchComponent,
  ],
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
  exports: [PageNotFoundComponent, HeaderComponent],
})
export class CoreModule {}
