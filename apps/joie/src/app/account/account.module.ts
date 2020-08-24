import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDashboardComponent } from './containers/account-dashboard/account-dashboard.component';
import { AccountSidenavComponent } from './components/account-sidenav/account-sidenav.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { AccountDeleteComponent } from './account-delete/account-delete.component';
import { AccountNotificationSetingsComponent } from './account-notification-setings/account-notification-setings.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountBankingComponent } from './account-banking/account-banking.component';

@NgModule({
  declarations: [
    AccountDashboardComponent,
    AccountInfoComponent,
    AccountBankingComponent,
    AccountNotificationSetingsComponent,
    AccountDeleteComponent,
    AccountSidenavComponent,
    AccountHeaderComponent,
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
  exports: [
    AccountNotificationSetingsComponent,
    AccountDeleteComponent,
    AccountInfoComponent,
    AccountBankingComponent,
  ],
})
export class AccountModule {}
