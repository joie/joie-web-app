import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  @ViewChild('form') form: Form;
  profile = {
    name: '',
    email: '',
    password: '',
    timezone: '',
  };
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getUser('user123').subscribe((user) => {
      this.profile = user;
    });
  }
  handleSendResetEmail() {}

  submitProfileChanges() {
    this.accountService.submitProfileChanges();
  }
}
