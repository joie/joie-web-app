import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KalturaClientModule, KalturaClient } from 'kaltura-ngx-client';
import { KalturaPlayerComponent } from './kaltura-player.component';
import { KalturaApiHandShakeService } from './kaltura-api-handshake.service';

@NgModule({
  declarations: [KalturaPlayerComponent],
  imports: [
    CommonModule,
    KalturaClientModule,
  ],
  exports: [KalturaPlayerComponent],
  providers: [KalturaApiHandShakeService, KalturaClient],
})
export class KalturaPlayerModule { }
