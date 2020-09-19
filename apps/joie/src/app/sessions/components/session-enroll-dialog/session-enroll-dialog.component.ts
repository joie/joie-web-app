import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Session } from '../../models';

@Component({
  selector: 'app-session-enroll-dialog',
  templateUrl: './session-enroll-dialog.component.html',
  styleUrls: ['./session-enroll-dialog.component.scss'],
})
export class SessionEnrollDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SessionEnrollDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { session$: Observable<Session> }
  ) {
    // data.session$.subscribe(console.log)
  }
}
