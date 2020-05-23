import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDashboardComponent } from './containers/home-dashboard/home-dashboard.component';
import { ClassListModule } from '../class-list/class-list.module';


@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [
    ClassListModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
