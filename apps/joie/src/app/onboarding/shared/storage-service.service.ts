import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';

export const USER_ONBOARDING = 'user-onboarding';
@Injectable({
  providedIn: 'root',
})
export class StorageServiceService {
  constructor(private storage: StorageMap) {}

  setItemSubscribe(key, newVal) {
    this.storage.set(key, newVal).subscribe();
  }

  getItem(key): Observable<any> {
    return this.storage.get(key);
  }

  removeItemSubscribe(key) {
    this.storage.delete(key).subscribe(); //optimize subscriptions
  }
}
