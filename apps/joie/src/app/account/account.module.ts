import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AccountRoutingModule } from './account-routing.module';
import { AccountSidenavComponent } from './components/account-sidenav/account-sidenav.component';
import { AccountDeleteComponent } from './account-delete/account-delete.component';
import { AccountNotificationSetingsComponent } from './account-notification-setings/account-notification-setings.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountBankingComponent } from './account-banking/account-banking.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { MainLayoutComponent } from '../common/components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AccountInfoComponent,
    AccountBankingComponent,
    AccountNotificationSetingsComponent,
    AccountDeleteComponent,
    AccountSidenavComponent,
    MainLayoutComponent,
    AccountProfileComponent,
  ],
  imports: [
    SharedModule,
    AccountRoutingModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class AccountModule {}
