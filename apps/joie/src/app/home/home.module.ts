import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDashboardComponent } from './containers/home-dashboard/home-dashboard.component';
import { SessionListModule } from '../session-list/session-list.module';
import { MaterialModule } from '../core/material.module';
import { KalturaPlayerModule } from '../kaltura-player/kaltura-player.module';
import { SharedModule } from '../shared/shared.module';
import { JoiePrefixPipe } from './pipes/joie-prefix/joie-prefix.pipe';

@NgModule({
  declarations: [HomeDashboardComponent, JoiePrefixPipe],
  imports: [
    SharedModule,
    HomeRoutingModule,
    SessionListModule,
    MaterialModule,
    KalturaPlayerModule,
  ],
})
export class HomeModule {}
