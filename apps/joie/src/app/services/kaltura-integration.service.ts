import { Injectable } from '@angular/core';
import {
  KalturaSessionType,
  KalturaClient,
  SessionStartAction,
} from 'kaltura-ngx-client';

export const USER_ID = 'aravind.fz@gmail.com';
export const USER_SECRET = 'de2ac6f0f3840f3946121a543d240ddb';

@Injectable({ providedIn: 'root' })
export class KalutraIntegrationService {
  constructor(private kalturaClient: KalturaClient) {}

  boot() {
    this.kalturaClient.setOptions({
      clientTag: 'sample-code',
      endpointUrl: 'https://www.kaltura.com',
    });
    this.kalturaClient
      .request(
        new SessionStartAction({
          secret: USER_SECRET,
          userId: USER_ID,
          type: KalturaSessionType.admin,
          partnerId: 2947731,
        })
      )
      .subscribe(
        (ks) => {
          this.kalturaClient.setDefaultRequestOptions({ ks });
        },
        (error) => {
          console.error(
            `failed to create session with the following error "SessionStartAction"`
          );
          throw error;
        }
      );
  }
}
