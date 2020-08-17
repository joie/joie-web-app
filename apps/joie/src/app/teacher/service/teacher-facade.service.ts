import { TeacherSessionsDataService } from '../teacher-sessions/services/teacher-sessions-data.service';
import { Injectable, Injector } from '@angular/core';
import { TeacherDataService } from '../teacher-dashboard/teacher-data.service';
import { Observable } from 'rxjs';

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

  submitSession(id: string, session) {
    this.teacherSessionsDataService.submitSession(id, session);
  }
}
