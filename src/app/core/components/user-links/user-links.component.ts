import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthFacade } from '../../../auth-state/+state/auth/facades/auth.facade';

@Component({
  selector: 'app-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.scss'],
})
export class UserLinksComponent {
  constructor(private afAuth: AngularFireAuth, public authFacade: AuthFacade) {}

  login() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
  }
}
