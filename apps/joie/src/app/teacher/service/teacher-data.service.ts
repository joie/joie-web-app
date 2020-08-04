import { Injectable } from '@angular/core';
import { navTabs, teacherMock, eventsMock } from '../teacher.mocks';
import { of, Observable } from 'rxjs';
import { Teacher } from '../models/teacher';
import { TeacherEvent } from '../models/event';

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
