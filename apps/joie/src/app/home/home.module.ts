import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDashboardComponent } from './containers/home-dashboard/home-dashboard.component';
import { SessionListModule } from '../session-list/session-list.module';

@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [HomeRoutingModule, SessionListModule],
})
export class HomeModule {}
