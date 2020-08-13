import { SharedModule } from './../shared/shared.module';
import { SessionListComponent } from './session-list.component';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SessionListRoutingModule } from './session-list-routing.module';

@NgModule({
  declarations: [SessionListComponent],
  imports: [SharedModule, SessionListRoutingModule, MatCardModule],
  exports: [SessionListComponent],
})
export class SessionListModule {}
