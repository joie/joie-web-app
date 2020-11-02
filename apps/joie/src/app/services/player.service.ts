import { Injectable} from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

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

interface IResponse {
  type: 'success' | 'error';
  data: any;
  message: string;
}
@Injectable({ providedIn: 'root' })
export class PlayerService {
  kWidget = kWidget;

  constructor(private kaltura: KalturaClient, private fns: AngularFireFunctions) {
    this.startSession().subscribe((resp: IResponse) => {
      if (resp.type === 'success') {
        this.kaltura.setOptions(resp.data.kaltura_options);
        this.kaltura.setDefaultRequestOptions({ ks: resp.data.session });
        this.runRequest();
      } else {
        console.error(`failed to create session with the following error "SessionStartAction"`);
        throwError(`failed to create session with the following error "SessionStartAction"`);
      }
    });
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

  startSession() {
    const callable = this.fns.httpsCallable('startKalturaSession');
    return callable({});
  }

  runRequest() {
    const filter = new KalturaMediaEntryFilter();
    const pager = new KalturaFilterPager();

    // retriving all the available videos
    this.kaltura.request(new MediaListAction({ filter, pager })).subscribe(
      (result) => {
        console.log('result', result);
      },
      (error) => {
        throwError(error);
      }
    );
  }
}
