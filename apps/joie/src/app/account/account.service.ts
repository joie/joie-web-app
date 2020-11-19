import { AuthService } from './../auth-state/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { sessionsMock, notificationSettingsMock, dashboardStatsMock, passwordMock } from './account.mocks';
import { map } from 'rxjs/operators';
import { NotificationSettings, Stat } from '../../../../../libs/schemes/src';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private authService: AuthService) {}

  getUser(id: string) {
    return this.authService.state$.pipe(
      map((user) => ({
        name: user.displayName,
        email: user.email,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        // todo is client supposed to have the password? or only the length to display bullets? or random ammount of bullets
        password: passwordMock,
      })),
    );
  }

  getNotificationSettings(id: string = 'user123') {
    // todo return this.httpClient.get()
    return of(notificationSettingsMock);
  }

  // todo interface settings
  submitNotificationSettings(id: string = 'user123', settings: NotificationSettings): Observable<boolean> {
    // todo return this.http.post
    return of(true);
  }

  closeAccount() {}
  contactSupport() {}
  submitProfileChanges() {}

  // for dashboard
  getDashboardStats(userId = '123'): Observable<Stat[]> {
    return of(dashboardStatsMock);
  }

  postMessage(id: string, session, message: string) {
    return of(true);
  }

  getSessions(userId: string) {
    return of(sessionsMock);
  }
}
