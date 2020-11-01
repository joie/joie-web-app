import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.scss'],
})
export class UserLinksComponent {
  constructor(public afAuth: AngularFireAuth) {}
}
