import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthFacade } from '../../auth/+state/auth/facades/auth.facade';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent {
  constructor(private afAuth: AngularFireAuth, public authFacade: AuthFacade) {}
  login() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.signOut();
  }
}
