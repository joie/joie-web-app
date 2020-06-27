import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDashboardComponent } from './containers/home-dashboard/home-dashboard.component';
import { ClassesModule } from '../classes/classes.module';

@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [ClassesModule, HomeRoutingModule],
})
export class HomeModule {}
