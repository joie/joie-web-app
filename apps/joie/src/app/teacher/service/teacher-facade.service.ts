import { Injectable, Injector } from '@angular/core';
import { TeacherDataService } from './teacher-data.service';

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
  constructor(private injector: Injector) {}

  getMenuTabs() {
    return this.teacherDataService.getMenuTabs();
  }

  getTeacher() {
    return this.teacherDataService.getTeacher();
  }

  getTeacherEvents() {
    return this.teacherDataService.getTeacherEvents();
  }
}
