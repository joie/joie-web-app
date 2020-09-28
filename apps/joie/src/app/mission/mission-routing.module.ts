import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionComponent } from './containers/mission/mission.component';

const routes: Routes = [{ path: '', component: MissionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionRoutingModule {}
