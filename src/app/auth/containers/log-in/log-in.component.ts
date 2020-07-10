import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs/operators';


@UntilDestroy()
@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(
    private afAuth: AngularFireAuth,
    public dialogRef: MatDialogRef<LogInComponent>
  ) {
    this.afAuth.authState
      .pipe(untilDestroyed(this), filter(Boolean))
      .subscribe(this.close.bind(this));
  }

   close() {
    console.log('closing');
    this.dialogRef.close();
  }
  // private firebaseAuthChangeListener(response) {
  //   // if needed, do a redirect in here
  //   if (response) {
  //     console.log('Logged in :)');
  //     this.close();
  //   } else {
  //     console.log('Logged out :(');
  //   }
  // }
}
