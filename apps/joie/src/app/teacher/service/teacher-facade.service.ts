import { TeacherSessionsDataService } from './../teacher-sessions/teacher-sessions-data.service';
import { Injectable, Injector } from '@angular/core';
import { TeacherDataService } from '../teacher-dashboard/teacher-data.service';
import { NotificationsApiService } from '../teacher-notifications/notifications-api.service';
import { Observable } from 'rxjs';
import { TeacherEvent } from '../../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherFacadeService {
  private _teacherDataService: TeacherDataService;
  public get teacherDataService(): TeacherDataService {
    if (!this._teacherDataService) {
      this._teacherDataService = this.injector.get(TeacherDataService);
    }
    return this._teacherDataService;
  }
  private _notificationsApiService: NotificationsApiService;
  public get notificationsApiService(): NotificationsApiService {
    if (!this._notificationsApiService) {
      this._notificationsApiService = this.injector.get(
        NotificationsApiService
      );
      return this._notificationsApiService;
    }
  }

  private _teacherSessionsDataService: TeacherSessionsDataService;
  public get teacherSessionsDataService(): TeacherSessionsDataService {
    if (!this._teacherSessionsDataService) {
      this._teacherSessionsDataService = this.injector.get(
        TeacherSessionsDataService
      );
    }
    return this._teacherSessionsDataService;
  }
  constructor(private injector: Injector) {}

  getMenuTabs() {
    return this.teacherDataService.getMenuTabs();
  }

  getTeacher(id: string) {
    return this.teacherDataService.getTeacher(id);
  }

  getSessions(id: string) {
    return this.teacherDataService.getSessions(id);
  }

  postMesage(id: string, session, message: string) {
    return this.teacherDataService.postMessage(id, session, message);
  }

  getNotificationSettings(id: string) {
    // todo this should be definetely abstracted into some account service
    return this.notificationsApiService.getNotificationSettings(id);
  }
  // todo to account service
  submitNotificationSettings(id: string, settings): Observable<Boolean> {
    return this.notificationsApiService.submitNotificationSettings(
      id,
      settings
    );
  }

  submitSession(id: string, session) {
    this.teacherSessionsDataService.submitSession(id, session);
  }
}
