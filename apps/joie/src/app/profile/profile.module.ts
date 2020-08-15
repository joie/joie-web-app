import { ProfileDeleteComponent } from './components/profile-delete/profile-delete.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileBankingComponent } from './components/profile-banking/profile-banking.component';
import { ProfileNotificationSetingsComponent } from './components/profile-notification-setings/profile-notification-setings.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProfileInfoComponent,
    ProfileBankingComponent,
    ProfileNotificationSetingsComponent,
    ProfileDeleteComponent,
  ],
  imports: [
    SharedModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [
    ProfileNotificationSetingsComponent,
    ProfileDeleteComponent,
    ProfileInfoComponent,
    ProfileBankingComponent,
  ],
})
export class ProfileModule {}
