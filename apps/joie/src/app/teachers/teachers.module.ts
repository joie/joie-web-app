import { NgModule } from '@angular/core';

import {TeachersComponent} from './containers/teachers/teachers.component';
import { TeachersRoutingModule } from './teachers-routing.module';
import { SessionListModule } from '../session-list/session-list.module';
import { MaterialModule } from '../core/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TeachersComponent,
  ],
  imports: [
    SharedModule,
    TeachersRoutingModule,
    SessionListModule,
    MaterialModule,
  ],
})
export class TeachersModule {}
