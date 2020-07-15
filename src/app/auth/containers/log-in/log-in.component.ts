import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@UntilDestroy()
@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(
    private afAuth: AngularFireAuth,
    private dialogRef: MatDialogRef<LogInComponent>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.afAuth.authState
      .pipe(untilDestroyed(this), filter(Boolean))
      .subscribe(this.closeAfterLogin.bind(this));
  }

  closeAfterLogin() {
    console.log('closing');
    const redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl');
    this.dialogRef.close({ redirectUrl: redirectUrl });
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
