import { AccountService } from '../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.scss'],
})
export class AccountDeleteComponent implements OnInit {
  bullets = [
    'You will no longer be able to login',
    'You will lose access lose access to your students.',
    ' But mostly, you will be missed',
  ]; //todo :CloseAccBullets
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  handleCloseAccount() {
    this.accountService.closeAccount();
  }

  handleContactSupport() {
    this.accountService.contactSupport();
  }
}
