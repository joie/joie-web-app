import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth/';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AccountService } from '../account.service';
import { AuthFacade } from '../../auth/services/auth.facade';

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
  isTeacher: any;

  constructor(
    private accountService: AccountService,
    private authFacade: AuthFacade,
    private afs: AngularFirestore,
  ) {}

  ngOnInit(): void {
    this.accountService.getUser('user123').subscribe((user) => {
      this.profile = user;
    });

    this.authFacade.uid$.subscribe((res) => {
      this.afs.collection('users', (ref: CollectionReference) => ref.where('uid', '==', res).limit(1)).valueChanges()
        .subscribe((user: any) => { this.isTeacher = user[0].isTeacher; });
    });
  }

  handleSendResetEmail() {}

  submitProfileChanges() {
    this.accountService.submitProfileChanges();
  }
}
