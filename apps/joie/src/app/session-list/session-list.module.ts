import { SharedModule } from './../shared/shared.module';
import { SessionListComponent } from './components/session-list/session-list.component';
import { NgModule } from '@angular/core';
import { SessionListRoutingModule } from './session-list-routing.module';
import { SessionCardComponent } from './components/session-card/session-card/session-card.component';
import { SessionListPaginationComponent } from './components/session-list-pagination/session-list-pagination.component';

@NgModule({
  declarations: [
    SessionListComponent,
    SessionListPaginationComponent,
    SessionCardComponent,
  ],
  imports: [
    SharedModule,
    SessionListRoutingModule,
  ],
  exports: [
    SessionListComponent,
    SessionListPaginationComponent,
  ],
})
export class SessionListModule {}
