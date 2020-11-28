import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck, switchMap, take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionsService } from '../../../services/sessions/sessions.service';
import { Confirmable } from '../../../shared/decorators/confirmable.decorator';
import { Status } from '../../../../../../../libs/schemes/src';

@Component({
  selector: 'app-session-owner-links',
  templateUrl: './session-owner-links.component.html',
  styleUrls: ['./session-owner-links.component.scss'],
})
export class SessionOwnerLinksComponent {
  sessionId$: Observable<string> = this.activatedRoute.params.pipe(pluck('sessionId'));
  #_sessionStatus$: Observable<Status> = this.sessionId$.pipe(
    switchMap((sessionId) => this.sessionsService.getSession(sessionId)),
    pluck('status'),
  );
  isPublic$ = this.#_sessionStatus$.pipe(map((status) => status === Status.Public));

  constructor(
    private sessionsService: SessionsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  get sessionId(): Promise<string> {
    return this.sessionId$.pipe(take(1)).toPromise();
  }

  @Confirmable(`Do you want to delete this session?`, 'warn', 'Delete')
  async deleteSession(): Promise<void> {
    const sessionId = await this.sessionId;

    const { message, type } = (await this.sessionsService.deleteSession(sessionId).pipe(take(1)).toPromise()) as {
      // TODO: set as part of #174 common back/front end model
      // TODO: https://github.com/joie/joie-web-app/issues/174
      message: string;
      type: 'error' | 'success';
    };
    if (type === 'success') {
      this.router.navigate(['/account', 'sessions']);
    }
    this.snackBar.open(message, undefined);
  }

  @Confirmable(
    `Are you sure session is fully composed and ready to be published? this cannot be undone`,
    'warn',
    'Publish',
  )
  async publishSession(): Promise<void> {
    const sessionId = await this.sessionId;
    this.sessionsService.setSession(sessionId, { status: Status.Public });
  }
}
