import { NgModule } from '@angular/core';

import { HowitworksRoutingModule } from './howitworks-routing.module';
import { HowitworksComponent } from './containers/howitworks.component';
import { SessionListModule } from '../session-list/session-list.module';
import { MaterialModule } from '../core/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HowitworksComponent],
  imports: [SharedModule, HowitworksRoutingModule, SessionListModule, MaterialModule],
})
export class HowitworksModule {}
