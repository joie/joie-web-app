import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KalturaClientModule, KalturaClient } from 'kaltura-ngx-client';
import { KalturaApiHandShakeService } from './kaltura-api-handshake.service';
import { KalturaLiveStreamPlayerComponent } from './kaltura-live-stream/kaltura-live-stream.component';
import { KalturaVodPlayerComponent } from './kaltura-vod/kaltura-vod-player.component';

@NgModule({
  declarations: [KalturaLiveStreamPlayerComponent, KalturaVodPlayerComponent],
  imports: [
    CommonModule,
    KalturaClientModule,
  ],
  exports: [KalturaLiveStreamPlayerComponent, KalturaVodPlayerComponent],
  providers: [KalturaApiHandShakeService, KalturaClient],
})
export class KalturaPlayerModule { }
