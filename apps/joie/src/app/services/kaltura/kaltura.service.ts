import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KalturaService {
  constructor(private fns: AngularFireFunctions) {}

  callKaltura(): Observable<[]> {
    const callable = this.fns.httpsCallable('kalturaGetSession');
    return callable({});
  }
}
