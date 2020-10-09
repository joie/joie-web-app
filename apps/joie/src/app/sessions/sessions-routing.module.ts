import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsessionComponent } from './containers/newsession/newsession.component';

const routes: Routes = [{ path: '', component: NewsessionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {}
