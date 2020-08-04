import { TestBed } from '@angular/core/testing';

import { TeacherFacadeService } from './teacher-facade.service';

describe('TeacherFacadeService', () => {
  let service: TeacherFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
