import { TestBed } from '@angular/core/testing';

import { TeacherSessionsDataService } from './teacher-sessions-data.service';

describe('TeacherSessionsDataService', () => {
  let service: TeacherSessionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherSessionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
