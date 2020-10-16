import { NgModule } from '@angular/core';

import { SessionRoutingModule } from './sessions-routing.module';
import { NewsessionComponent } from './containers/newsession/newsession.component';
import { MaterialModule } from '../core/material.module';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { PlayerService } from './sessions.service';
import { NgxFileDropModule } from 'ngx-file-drop';
@NgModule({
  declarations: [NewsessionComponent],
  imports: [
    SessionRoutingModule,
    MaterialModule,
    SharedModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    NgxFileDropModule,
  ],
  providers: [PlayerService],
})
export class SessionsModule {}
