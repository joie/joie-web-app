import { TestBed } from '@angular/core/testing';

import { StudentOnbiardingService } from './student-onbiarding.service';

describe('StudentOnbiardingService', () => {
  let service: StudentOnbiardingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentOnbiardingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
