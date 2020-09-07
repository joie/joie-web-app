import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { take } from 'rxjs/operators';

export const USER_ONBOARDING = 'user-onboarding';
@Injectable({
  providedIn: 'root',
})
export class StorageServiceService {
  constructor(private storage: StorageMap) {}

  setItemSubscribe(key, newVal) {
    this.storage.set(key, newVal).subscribe();
  }
  // setItemSubscribe(key, newValue): void {
  //   this.storage
  //     .get(key)
  //     .pipe(take(1))
  //     .subscribe((prevValue: object) => {
  //       if (!prevValue) {
  //         const subscription = this.storage.set(key, newValue).pipe(take(1)).subscribe();
  //       } else {
  //         const valueEntries = Object.entries(newValue)[0];
  //         const subscription = this.storage
  //           .set(key, { ...prevValue, [valueEntries[0]]: valueEntries[1] })
  //           .pipe(take(1))
  //           .subscribe();
  //       }
  //     });
  // }
  getItem(key): Observable<any> {
    return this.storage.get(key);
  }

  removeItemSubscribe(key) {
    this.storage.delete(key).subscribe(); //optimize subscriptions
  }
}
