import { TestBed } from '@angular/core/testing';

import { TeacherOnboardingFormService } from './teacher-onboarding-form.service';

describe('TeacherOnboardingFormService', () => {
  let service: TeacherOnboardingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherOnboardingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
