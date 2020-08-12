import { sessionsMock } from './../teacher.mocks';
import { TeacherEvent } from '../../models/event.model';
import { Injectable } from '@angular/core';
import { navTabs, dashboardInfoMock } from '../teacher.mocks';
import { of, Observable } from 'rxjs';
import { Teacher } from '../../models/teacher.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherDataService {
  constructor() {}

  getMenuTabs() {
    return of(navTabs);
  }
  getTeacher(userId = '123'): Observable<Teacher> {
    return of(dashboardInfoMock);
  }

  postMessage(id: string, session, message: string) {
    return of(true);
  }

  getSessions(userId: string) {
    return of(sessionsMock);
  }
}
