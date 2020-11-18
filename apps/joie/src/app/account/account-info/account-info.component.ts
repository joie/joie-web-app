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
  isTeacher$: Observable<any>;

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
      this.isTeacher$ = this.afs.collection('users', (ref: CollectionReference) => ref.where('uid', '==', res).orderBy('isTeacher').limit(1)).valueChanges();
    });
  }

  handleSendResetEmail() {}

  submitProfileChanges() {
    this.accountService.submitProfileChanges();
  }
}
