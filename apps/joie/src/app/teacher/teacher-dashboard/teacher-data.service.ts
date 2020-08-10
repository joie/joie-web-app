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

  // todo teacher event should be a part of session or contain a refrence to it
  postMessage(id: string, event: TeacherEvent, message: string) {
    return of(true);
  }
  // getTeacherEvents(
  //   userId = 123,
  //   limit: number = 3
  // ): Observable<TeacherEvent[]> {
  //   return of(dashboardInfoMock.events);
  // }
}
