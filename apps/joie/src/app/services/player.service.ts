import { Injectable} from '@angular/core';

import {
  KalturaClient,
  SessionStartAction,
  KalturaSessionType,
  KalturaMediaEntryFilter,
  KalturaFilterPager,
  MediaListAction,
} from 'kaltura-ngx-client';
import { throwError } from 'rxjs';

declare var kWidget;
declare var $: any;
@Injectable({ providedIn: 'root' })
export class PlayerService {
  kWidget = kWidget;
  constructor(private kaltura: KalturaClient) {
    this.kaltura.setOptions({
      clientTag: 'sample-code',
      endpointUrl: 'https://www.kaltura.com',
    });
    // create session for Kalutura handshake
    this.kaltura
      .request(
        new SessionStartAction({
          secret: 'dbd317b69a5164bad9222d6ffad98a2e',
          userId: 'rroy26740@gmail.com',
          type: KalturaSessionType.admin,
          partnerId: 2976751,
        })
      )
      .subscribe(
        (ks) => {
          this.kaltura.setDefaultRequestOptions({ ks });
          this.runRequest();
        },
        (error) => {
          console.error(`failed to create session with the following error "SessionStartAction"`);
          throwError(error);
        }
      );
  }

  boot(entryID: any) {
    const kalturaConfiguration = {
      targetId: 'player',
      wid: '_2976751',
      uiconf_id: 46213871,
      flashvars: {},
      cache_st: 1602684332,
      entry_id: entryID,
    };
    this.kWidget.embed(kalturaConfiguration);
  }

  reboot(entryID: any) {
    console.log('updated video id-->', entryID);
    this.kWidget.addReadyCallback(function (playerId) {
      // var kdp = document.getElementById('player');
      const kdp = $('#player').get(0);
      kdp.sendNotification('changeMedia', { entryId: $(this).attr('data-entryId') });
      kdp.kBind('changeMedia', function (data) {
        console.log('data?-------------->', data);
        kdp.evaluate();
      });
    });
  }

  runRequest() {
    const filter = new KalturaMediaEntryFilter();
    const pager = new KalturaFilterPager();

    // retriving all the available videos
    this.kaltura.request(new MediaListAction({ filter, pager })).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        throwError(error);
      }
    );
  }
}
