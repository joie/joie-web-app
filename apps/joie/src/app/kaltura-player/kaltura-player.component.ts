import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { KalturaApiHandShakeService } from './kaltura-api-handshake.service';

declare var kWidget;
@Component({
  selector: 'app-kaltura-player',
  templateUrl: './kaltura-player.component.html',
  styleUrls: ['./kaltura-player.component.scss']
})
export class KalturaPlayerComponent implements OnInit, OnDestroy {
  @Input() width = 600;
  @Input() height = 400;
  kWidget = kWidget;
  kalturaConfiguration;

  constructor(private kalturaApiHandShakeService: KalturaApiHandShakeService) {
    this.kalturaConfiguration = {
      targetId: 'player',
      wid: `_${environment.kalturaConfig.partner_id}`,
      uiconf_id: environment.kalturaConfig.uiconf_id,
      flashvars: {},
      entry_id: '1_0v7lxhb8',
    };
  }

  ngOnInit() {
    this.kWidget
      .embed(this.kalturaConfiguration);
    this.kalturaApiHandShakeService
      .getKalturaSession();
  }

  ngOnDestroy() {
    this.kWidget
      .destroy('player');
  }

}
