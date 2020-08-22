import { sessionsMock } from './../teacher.mocks';
import { Injectable } from '@angular/core';
import { dashboardInfoMock } from '../teacher.mocks';
import { of, Observable } from 'rxjs';
import { Teacher } from '../../models/teacher.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherDataService {
  constructor() {}

  getTeacher(userId = '123'): Observable<Teacher> {
    return of(dashboardInfoMock); // todo should be moved to a feture root level service. Directly to facade?
  }

  postMessage(id: string, session, message: string) {
    return of(true);
  }

  getSessions(userId: string) {
    return of(sessionsMock); // todo should be moved to a feture root level service. Directly to facade?
  }
}
