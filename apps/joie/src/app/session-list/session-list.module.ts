import { SharedModule } from './../shared/shared.module';
import { SessionListComponent } from './components/session-list/session-list.component';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SessionListRoutingModule } from './session-list-routing.module';

@NgModule({
  declarations: [SessionListComponent],
  imports: [
    SharedModule,
    SessionListRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  exports: [SessionListComponent],
})
export class SessionListModule {}
