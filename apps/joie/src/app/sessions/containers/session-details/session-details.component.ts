import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck, shareReplay, switchMap } from 'rxjs/operators';
// import { UntilDestroy } from '@ngneat/until-destroy';
import { SessionsService } from '../../../services/sessions/sessions.service';
import { Observable } from 'rxjs';
import { AuthFacade } from '../../../auth/services/auth.facade';
import { Pillar, PillarsIconsMap } from '../../../enums/pillar.enum';

// @UntilDestroy()
@Component({
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent {
  private _sessionId$: Observable<string> = this.activatedRoute.params.pipe(pluck('sessionId'));
  session$ = this._sessionId$.pipe(
    switchMap((sessionId) => {
      this.sessionId = sessionId;
      console.log(sessionId);
      return this.sessionsFacade.getSession(sessionId);
    }),
    shareReplay()
  );
  eventId$: Observable<number> = this.session$.pipe(pluck('eventId'));
  displayName$ = this.authFacade.displayName$;
  uid$ = this.authFacade.uid$;
  sessionId: string;

  owner$ = this.session$.pipe(pluck('owner'), shareReplay());
  sessionOwnerId$ = this.owner$.pipe(pluck('uid'), shareReplay());

  isOwner$: Observable<boolean> = this.sessionOwnerId$.pipe(
    switchMap((sessionOwnerId) =>
      this.authFacade.uid$.pipe(
        map((uid) => sessionOwnerId === uid)
      )
    )
  );

  // TODO - default assignment will be removed after integration

  isLiveSession = false; // if false vod player is visible // @TODO: where does this come from, ask @yinon
  // kalturaSessionDetails$: Pick<KalturaEvent, 'eventId'> & Pick<Owner, 'name'>;
  sessionType = 2; // @TODO: where does this come from, ask @yinon
  role = 'adminRole'; // @TODO: ask @yinon, we need to resolve this hardcoded role
  userContextualRole = 0; // @TODO: where does this come from, ask @yinon

  pillar = Pillar;
  pillarIcons = PillarsIconsMap;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionsFacade: SessionsService,
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
