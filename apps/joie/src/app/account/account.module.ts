import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDashboardComponent } from './containers/account-dashboard/account-dashboard.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { AccountBankingComponent } from './components/account-banking/account-banking.component';
import { AccountNotificationSetingsComponent } from './components/account-notification-setings/account-notification-setings.component';
import { AccountDeleteComponent } from './components/account-delete/account-delete.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AccountDashboardComponent,
    AccountInfoComponent,
    AccountBankingComponent,
    AccountNotificationSetingsComponent,
    AccountDeleteComponent,
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
