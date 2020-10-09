import { NgModule } from '@angular/core';

import { SessionRoutingModule } from './sessions-routing.module';
import { NewsessionComponent } from './containers/newsession/newsession.component';
import { MaterialModule } from '../core/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewsessionComponent],
  imports: [SessionRoutingModule, MaterialModule, SharedModule],
})
export class SessionsModule {}
