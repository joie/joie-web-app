import { Observable } from 'rxjs';
import { Session } from './../../models/session';
import { PaymentService } from './../../../services/payment/payment.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-session-enroll-dialog',
  templateUrl: './session-enroll-dialog.component.html',
  styleUrls: ['./session-enroll-dialog.component.scss'],
})
export class SessionEnrollDialogComponent {
  sessionId: string;

  constructor(
    public dialogRef: MatDialogRef<SessionEnrollDialogComponent>,
    private paymentService: PaymentService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { session: Session },
  ) {
    this.sessionId = data.session.id;
  }

  async buySession(): Promise<void> {
    const resp = await this.paymentService.sessionCharge(this.sessionId).toPromise();
    this.dialogRef.close();
    if (resp && resp.type === 'success') {
      this.snackBar.open(`Session Enrolment sucessful`, 'Close', {
        duration: 4000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
      return;
    }
    this.snackBar.open(`Session Enrolment failed`, 'Close', {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
