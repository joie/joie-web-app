import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SessionsFacade } from '../../../services/sessions.facade';
import { Observable } from 'rxjs';
import { pluck, shareReplay, switchMap } from 'rxjs/operators';
import { AuthFacade } from '../../../auth/services/auth.facade';
import { Pillar, PillarsIconsMap } from '../../../enums/pillar.enum';

@UntilDestroy()
@Component({
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent {
  private _sessionId$: Observable<string> = this.activatedRoute.params.pipe(pluck('sessionId'));
  session$ = this._sessionId$.pipe(
    switchMap((sessionId) => this.sessionsFacade.getSession(sessionId)),
    shareReplay()
  );
  eventId$: Observable<number> = this.session$.pipe(pluck('eventId'));
  owner$ = this.session$.pipe(pluck('owner'), shareReplay());

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

  pillar = Pillar;
  pillarIcons = PillarsIconsMap;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionsFacade: SessionsFacade,
    private authFacade: AuthFacade
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
}
