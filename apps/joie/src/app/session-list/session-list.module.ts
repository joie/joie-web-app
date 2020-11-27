import { SharedModule } from './../shared/shared.module';
import { SessionListComponent } from './components/session-list/session-list.component';
import { NgModule } from '@angular/core';
import { SessionListRoutingModule } from './session-list-routing.module';
import { SessionCardComponent } from './components/session-card/session-card/session-card.component';

@NgModule({
  declarations: [SessionListComponent, SessionCardComponent],
  imports: [SharedModule, SessionListRoutingModule],
  exports: [SessionListComponent],
})
export class SessionListModule {}
