import { AuthService } from './../auth-state/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { notificationSettingsMock, dashboardInfoMock, profileInfoMock } from './profile.mocks';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Teacher } from '../models/teacher.model';
import { sessionsMock } from './account.mocks';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  getUser(id: string) {
    // const timezone = new Date().getTimezoneOffset();
    return this.authService.state$.pipe(
      map((user) => ({
        name: user.displayName,
        email: user.email,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, // todo replace with real data
        password: profileInfoMock.password, // todo is client supposed to have the password? or only the length to display bullets? or random ammount of bullets
      }))
    );
  }

  getNotificationSettings(id: string = 'user123') {
    // todo return this.httpClient.get()
    return of(notificationSettingsMock);
  }

  // todo interface settings
  submitNotificationSettings(id: string = 'user123', settings): Observable<Boolean> {
    // todo return this.http.post
    return of(true);
  }

  closeAccount() {}
  contactSupport() {}
  submitProfileChanges() {}

  // for dashboard
  getTeacher(userId = '123'): Observable<Teacher> {
    return of(dashboardInfoMock);
  }

  postMessage(id: string, session, message: string) {
    return of(true);
  }

  getSessions(userId: string) {
    return of(sessionsMock);
  }

  //
}
