import { NgModule } from '@angular/core';

import { MissionRoutingModule } from './mission-routing.module';
import { MissionComponent } from './containers/mission/mission.component';
import { SessionListModule } from '../session-list/session-list.module';
import { MaterialModule } from '../core/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MissionComponent,
  ],
  imports: [
    SharedModule,
    MissionRoutingModule,
    SessionListModule,
    MaterialModule,
  ],
})
export class MissionModule {}
