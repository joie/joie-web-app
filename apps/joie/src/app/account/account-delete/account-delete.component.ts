import { AccountService } from '../account.service';
import { Component, OnInit } from '@angular/core';
import { accountDeleteBullets } from './account-delete-bullets';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.scss'],
})
export class AccountDeleteComponent implements OnInit {
  bullets = accountDeleteBullets;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  handleCloseAccount() {
    this.accountService.closeAccount();
  }

  handleContactSupport() {
    this.accountService.contactSupport();
  }
}
