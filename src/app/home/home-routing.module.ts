import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDashboardComponent } from './containers/home-dashboard/home-dashboard.component';

const routes: Routes = [{ path: '', component: HomeDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
