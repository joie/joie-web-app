import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionsService } from '../../../services/sessions/sessions.service';
import { Confirmable } from '../../../shared/decorators/confirmable.decorator';

@Component({
  selector: 'app-session-owner-links',
  templateUrl: './session-owner-links.component.html',
  styleUrls: ['./session-owner-links.component.scss'],
})
export class SessionOwnerLinksComponent {
  sessionId$: Observable<string> = this.activatedRoute.params.pipe(pluck('sessionId'));

  constructor(
    private sessionsFacade: SessionsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  @Confirmable(`Do you want to delete this session?`, 'warn', 'Delete')
  async deleteSession() {
    const sessionId = await this.activatedRoute.params
      .pipe(pluck('sessionId'), take(1))
      .toPromise();

    const { message, type } = (await this.sessionsFacade
      .deleteSession(sessionId)
      .pipe(take(1))
      .toPromise()) as {
      // TODO: set as part of #174 common back/front end model
      // TODO: https://github.com/joie/joie-web-app/issues/174
      message: string;
      type: 'error' | 'success';
    };
    if (type === 'success') {
      this.router.navigate(['/account', 'sessions']);
    }
    this.snackBar.open(message, null, {
      duration: 8000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
