import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDashboardComponent } from './containers/home-dashboard/home-dashboard.component';
import { SessionListModule } from '../session-list/session-list.module';
import { MaterialModule } from '../core/material.module';
import { KalturaPlayerModule } from '../kaltura-player/kaltura-player.module';

@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [HomeRoutingModule, SessionListModule, MaterialModule, KalturaPlayerModule],
})
export class HomeModule {}
