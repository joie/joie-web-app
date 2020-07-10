import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthFacade } from '../../../auth-state/+state/auth/facades/auth.facade';

@Component({
  selector: 'app-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.scss'],
})
export class UserLinksComponent {
  constructor(public afAuth: AngularFireAuth, public authFacade: AuthFacade) {}

  logout() {
    this.afAuth.signOut();
  }
}
