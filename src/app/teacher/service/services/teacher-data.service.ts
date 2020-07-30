import { Injectable } from '@angular/core';
import { navTabs, teacherMock, eventsMock } from '../../teacher-page.mocks';
import { EventTypes, TeacherEvent, Teacher } from '../../teacher.interfaces';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherDataService {
  constructor() {}

  getMenuTabs() {
    return of(navTabs);
  }
  getTeacher(userId = '123'): Observable<Teacher> {
    return of(teacherMock);
  }
  getTeacherEvents(
    userId = 123,
    limit: number = 3
  ): Observable<TeacherEvent[]> {
    return of(eventsMock);
  }
}
