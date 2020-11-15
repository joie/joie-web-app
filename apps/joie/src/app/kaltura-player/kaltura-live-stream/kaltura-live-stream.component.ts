import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { KalturaApiHandShakeService } from '../kaltura-api-handshake.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

declare let kWidget;

@UntilDestroy()
@Component({
  selector: 'app-live-stream-player',
  templateUrl: './kaltura-live-stream.component.html',
  styleUrls: ['./kaltura-live-stream.component.scss'],
})
export class KalturaLiveStreamPlayerComponent implements OnChanges {
  @Input() width = 600;
  @Input() height = 400;
  // @Input() isLiveSession: boolean; // ! @pratheeshkumarrd this is never used
  @Input() displayName: string;
  @Input() eventId: number;
  @Input() sessionType: number;
  @Input() role: string;
  @Input() userContextualRole: number;
  isLoading = true;
  videoUrl: SafeResourceUrl;

  constructor(private kalturaApiHandShakeService: KalturaApiHandShakeService, private domSanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    // only call live stream session if all needed arguments have values
    const changesKeys = Object.keys(changes);
    const liveStreamArgs = ['displayName', 'eventId', 'sessionType', 'role', 'userContextualRole'];
    const isLiveStreamArgChanged = changesKeys.some((value) => liveStreamArgs.includes(value));
    if (isLiveStreamArgChanged) {
      const allLiveStreamArgsHasValue = liveStreamArgs.every(
        (key) => typeof this[key] !== 'undefined' && this[key] !== null,
      );

      if (allLiveStreamArgsHasValue) {
        this.kalturaApiHandShakeService.getKalturaSession(); // ! @pratheeshkumarrd should this be set only once on init?
        this.openLiveStreamSession();
      }
    }
  }

  openLiveStreamSession() {
    this.kalturaApiHandShakeService
      .createSession(this.displayName, this.eventId, this.role, this.sessionType, this.userContextualRole)
      .pipe(untilDestroyed(this))
      .subscribe(
        (result) => {
          this.isLoading = false;
          const url = `https://${KalturaApiHandShakeService.partnerId}.kaf.kaltura.com/virtualEvent/launch?ks=${result}`;
          this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        },
        (error) => {
          console.log(`KalturaLiveStreamPlayerComponent : openLiveStreamSession() :: ${error} while fetching session`);
        },
      );
  }
}
