import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { KalturaApiHandShakeService } from '../kaltura-api-handshake.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

declare var kWidget;
@Component({
  selector: 'app-live-stream-player',
  templateUrl: './kaltura-live-stream.component.html',
  styleUrls: ['./kaltura-live-stream.component.scss']
})
export class KalturaLiveStreamPlayerComponent implements OnInit, OnDestroy {
  @Input() width = 600;
  @Input() height = 400;
  @Input() isLiveSession: boolean;
  @Input() sessionDetails: any;
  @Input() sessionType: number;
  @Input() role: string;
  @Input() userContextualRole: number;
  isLoading = true;
  videoUrl: SafeResourceUrl;
  private destroy$ = new Subject();

  constructor(private kalturaApiHandShakeService: KalturaApiHandShakeService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.kalturaApiHandShakeService
      .getKalturaSession();
    this.openLiveStreamSession();
  }

  openLiveStreamSession() {
    this.kalturaApiHandShakeService.createSession(this.sessionDetails, this.role, this.sessionType, this.userContextualRole)
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.isLoading = false;
        const url = `https://${KalturaApiHandShakeService.partnerId}.kaf.kaltura.com/virtualEvent/launch?ks=${result}`;
        this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
      },
        error => {
          console.log(`KalturaLiveStreamPlayerComponent : openLiveStreamSession() :: ${error} while fetching session`);
        });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
