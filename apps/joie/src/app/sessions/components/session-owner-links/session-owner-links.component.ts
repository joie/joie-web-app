import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionsFacade } from '../../../services/sessions.facade';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Confirmable } from '../../../shared/decorators/confirmable.decorator';

@Component({
  selector: 'app-session-owner-links',
  templateUrl: './session-owner-links.component.html',
  styleUrls: ['./session-owner-links.component.scss'],
})
export class SessionOwnerLinksComponent {
  sessionId$: Observable<string> = this.activatedRoute.params.pipe(pluck('sessionId'));

  constructor(
    private sessionsFacade: SessionsFacade,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  async deleteSession() {
    this.activatedRoute.params.pipe(pluck('sessionId')).subscribe(async (sessionId: string) => {
      const resp = (await this.sessionsFacade.deleteSession(sessionId).toPromise()) as {
        message: string;
        type: 'error' | 'success';
      };
      if (resp.type === 'success') {
        this.router.navigate(['/account', 'sessions']);
      }
      this.snackBar.open(resp.message, ``, {
        duration: 8000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
    });
  }

  openDeleteDialog(): void {
    // const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    //   width: '250px',
    //   data: {
    //     message: `Do you want to delete this session?`,
    //     confirmText: 'Delete',
    //     confirmColor: 'warn',
    //   },
    // });

    // dialogRef.afterClosed().subscribe(async (result: boolean) => {
    //   if (result) {
    //     await this.deleteSession();
    //   }
    // });

    const confirmable = Confirmable('', `Do you want to delete this session?`, 'primary', 'Delete');
  }
}
