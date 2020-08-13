import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileBankingComponent } from './components/profile-banking/profile-banking.component';
import { ProfileNotificationSetingsComponent } from './components/profile-notification-setings/profile-notification-setings.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    ProfileInfoComponent,
    ProfileBankingComponent,
    ProfileNotificationSetingsComponent,
  ],
  imports: [SharedModule, MatSlideToggleModule, MatDividerModule],
  exports: [ProfileNotificationSetingsComponent],
})
export class ProfileModule {}
