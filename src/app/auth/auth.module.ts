import { NgModule } from '@angular/core';
import { LogInComponent } from './containers/log-in/log-in.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [LogInComponent],
  imports: [AuthRoutingModule, SharedModule, MatDialogModule],
  exports: [LogInComponent],
})
export class AuthModule {}
