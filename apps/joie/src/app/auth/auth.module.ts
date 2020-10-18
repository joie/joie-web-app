import { NgModule } from '@angular/core';
import { LogInComponent } from './containers/log-in/log-in.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

import { FirebaseUIModule } from 'firebaseui-angular';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { firebaseUiAuthConfig } from './firebase-ui.config';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    AuthRoutingModule,
    SharedModule,
    MatDialogModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    NgxAuthFirebaseUIModule,
  ],
  exports: [LogInComponent],
})
export class AuthModule {}
