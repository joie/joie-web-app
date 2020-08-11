import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { KalturaClient, SessionStartAction, KalturaSessionType, KalturaMediaEntryFilter, KalturaFilterPager, MediaListAction } from 'kaltura-ngx-client';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class KalturaApiHandShakeService {

  constructor(private kaltura: KalturaClient) { }

  getKalturaSession() {
    this.kaltura.setOptions({
      clientTag: 'sample-code',
      endpointUrl: 'https://www.kaltura.com',
    });
    // create session for Kalutura handshake
    this.kaltura.request(new SessionStartAction({
      secret: environment.kalturaConfig.clientSecret,
      type: KalturaSessionType.admin,
      partnerId: environment.kalturaConfig.partner_id,
    }))
      .subscribe(ks => {
        this.kaltura.setDefaultRequestOptions({ ks });
        this.getAllSessions();
      },
        error => {
          console.error(`failed to create session with the following error "SessionStartAction"`);
          throwError(error);
        });
  }

  getAllSessions() {
    const filter = new KalturaMediaEntryFilter();
    const pager = new KalturaFilterPager();

    // retriving all the available videos
    this.kaltura.request(new MediaListAction({ filter, pager }))
      .subscribe(result => {
        console.log(result);
      },
        error => {
          throwError(error);
        });
  }
}
