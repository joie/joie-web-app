import { TestBed } from '@angular/core/testing';

import { SessionEnrolmentGuard } from './session-enrolment.guard';

describe('SessionEnrolmentGuard', () => {
  let guard: SessionEnrolmentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SessionEnrolmentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
