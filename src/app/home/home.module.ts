import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDashboardComponent } from './containers/home-dashboard/home-dashboard.component';
import { SessionsModule } from '../sessions/sessions.module';

@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [SessionsModule, HomeRoutingModule],
})
export class HomeModule {}
