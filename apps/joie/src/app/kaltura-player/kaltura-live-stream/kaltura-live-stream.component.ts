import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { KalturaApiHandShakeService } from '../kaltura-api-handshake.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

declare var kWidget;

@UntilDestroy()
@Component({
  selector: 'app-live-stream-player',
  templateUrl: './kaltura-live-stream.component.html',
  styleUrls: ['./kaltura-live-stream.component.scss'],
})
export class KalturaLiveStreamPlayerComponent implements OnInit {
  @Input() width = 600;
  @Input() height = 400;
  @Input() isLiveSession: boolean;
  @Input() sessionDetails: any;
  @Input() sessionType: number;
  @Input() role: string;
  @Input() userContextualRole: number;
  isLoading = true;
  videoUrl: SafeResourceUrl;

  constructor(
    private kalturaApiHandShakeService: KalturaApiHandShakeService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.kalturaApiHandShakeService.getKalturaSession();
    this.openLiveStreamSession();
  }

  openLiveStreamSession() {
    this.kalturaApiHandShakeService
      .createSession(this.sessionDetails, this.role, this.sessionType, this.userContextualRole)
      .pipe(untilDestroyed(this))
      .subscribe(
        (result) => {
          this.isLoading = false;
          const url = `https://${KalturaApiHandShakeService.partnerId}.kaf.kaltura.com/virtualEvent/launch?ks=${result}`;
          this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        },
        (error) => {
          console.log(
            `KalturaLiveStreamPlayerComponent : openLiveStreamSession() :: ${error} while fetching session`
          );
        }
      );
  }
}
