import { Injectable } from '@angular/core';
import { navTabs } from '../../teacher-page.mocks';

@Injectable({
  providedIn: 'root',
})
export class TeacherDataService {
  constructor() {}

  getMenuTabs() {
    return navTabs;
  }
}
