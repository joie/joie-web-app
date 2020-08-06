import { ToggleBlock } from './../../models/toggle.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { notificationSettingsMock } from '../teacher.mocks';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsApiService {
  constructor(private httpClient: HttpClient) {}

  getNotificationSettings(id: string = 'user123') {
    // todo return this.httpClient.get()
    return of(notificationSettingsMock);
  }

  // todo interface settings
  submitNotificationSettings(
    id: string = 'user123',
    settings
  ): Observable<Boolean> {
    // todo return this.http.post
    return of(true);
  }
}
