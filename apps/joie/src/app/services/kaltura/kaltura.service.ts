import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';
// import { } from 'kaltura-ngx-client'
@Injectable({
  providedIn: 'root',
})
export class KalturaService {
  constructor(private fns: AngularFireFunctions) {}

  getKalturaSession(): Observable<[]> {
    const callable = this.fns.httpsCallable('addLiveStream');
    return callable({});
  }

  getScheduleResourceList(): Observable<[]> {
    const callable = this.fns.httpsCallable('getScheduleResourceList');
    return callable({});
  }
}
