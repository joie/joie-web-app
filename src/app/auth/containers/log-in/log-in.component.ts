import { Component } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(private afAuth: AngularFireAuth) {}

  login() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
