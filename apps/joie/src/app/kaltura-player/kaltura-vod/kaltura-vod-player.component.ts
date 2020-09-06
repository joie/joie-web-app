import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';

declare var kWidget;

@Component({
  selector: 'app-video-player',
  templateUrl: './kaltura-vod-player.component.html',
  styleUrls: ['./kaltura-vod-player.component.scss'],
})
export class KalturaVodPlayerComponent implements OnInit, OnDestroy {
  static readonly targetId = environment.kalturaConfig.targetId;

  @Input() width = 600;
  @Input() height = 400;
  @Input() entryId: string;

  kWidget = kWidget;
  kalturaConfiguration;

  constructor() {}

  ngOnInit() {
    this.kalturaConfiguration = {
      targetId: KalturaVodPlayerComponent.targetId,
      wid: `_${environment.kalturaConfig.partner_id}`,
      uiconf_id: environment.kalturaConfig.uiconf_id,
      flashvars: {},
      entry_id: this.entryId,
    };
    this.kWidget.embed(this.kalturaConfiguration);
  }

  ngOnDestroy() {
    this.kWidget.destroy(KalturaVodPlayerComponent.targetId);
  }
}
