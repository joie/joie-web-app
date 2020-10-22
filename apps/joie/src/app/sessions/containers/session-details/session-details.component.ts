import { ConfirmationDialogComponent } from './../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SessionsFacade } from '../../../services/sessions.facade';
import { Observable } from 'rxjs';
import { pluck, shareReplay, switchMap, take } from 'rxjs/operators';
import { AuthFacade } from '../../../auth/services/auth.facade';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@UntilDestroy()
@Component({
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent implements OnInit {
  private _sessionId$: Observable<string> = this.activatedRoute.params.pipe(pluck('sessionId'));
  session$ = this._sessionId$.pipe(
    switchMap((sessionId) => this.sessionsFacade.getSession(sessionId)),
    shareReplay()
  );
  eventId$: Observable<number> = this.session$.pipe(pluck('eventId'));
  displayName$ = this.authFacade.displayName$;
  photoURL$ = this.authFacade.user$.pipe(pluck('photoURL'));

  // kalturaPlayerDetails$: Pick<SessionStartActionArgs, 'userId'> &
  //   Pick<Session, 'eventId'> = combineLatest([this.#displayName$, this.#eventId$]).pipe(
  //   map(([displayName, eventId]) => ({
  //     userId: displayName,
  //     eventId,
  //   }))
  // );

  // TODO - default assignment will be removed after integration

  isLiveSession = false; // if false vod player is visible

  // kalturaSessionDetails$: Pick<KalturaEvent, 'eventId'> & Pick<Owner, 'name'>;

  sessionType = 2;

  role = 'adminRole';

  userContextualRole = 0;

  entryId = '1_0v7lxhb8';

  showDelete: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionsFacade: SessionsFacade,
    private authFacade: AuthFacade,
    private dialog: MatDialog
  ) {}

  // get kalturaSessionDetails$(): Observable<SessionStartActionArgs> {
  //   return this.session$.pipe(
  //     pluck('eventId', 'name'),
  //     map(({ name: userId, ...rest }) => ({ userId, ...rest }))
  //   );
  // }

  // loadData() {
  //   combineLatest([
  //     this.afAuth.authState.pipe(untilDestroyed(this)),
  //     this.sessionsFacade.getSession(this.sessionId),
  //   ])
  //     .pipe(untilDestroyed(this))
  //     .subscribe(([authResponse, {session}]) => {
  //       // this.sessionDetails = {
  //       //   eventId: session.eventId,
  //       //   uid: authResponse.displayName,
  //       // };

  //       this.session = session;
  //     });
  // }

  ngOnInit() {
    this.authFacade.owner$.subscribe((owner) => {
      this.session$.subscribe((session) => {
        this.showDelete = false;
        if (owner.uid === session.owner.uid) {
          this.showDelete = true;
        }
      });
    });
  }

  async deleteSession() {
    this.activatedRoute.params.pipe(pluck('sessionId'))
      .subscribe(async (sessionId: string) => {
        const resp = await this.sessionsFacade.deleteSession(sessionId).toPromise() as { message: string; type: 'error' | 'success'; };
        console.log('resp: ', resp, sessionId);
        if (resp.type === 'success') {
          // @TODO: redirect to some page
        } else {
          // @TODO: show alert why it failed
        }
      });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {
        message: `Do you want to delete this session?`,
        confirmText: 'Delete',
        confirmColor: 'warn'
      }
    });

    dialogRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        await this.deleteSession();
      }
    });
  }
}
