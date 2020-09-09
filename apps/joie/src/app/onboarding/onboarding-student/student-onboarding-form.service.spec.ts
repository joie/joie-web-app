import { TestBed } from '@angular/core/testing';

import { StudentOnboardingFormService } from './student-onboarding-form.service';

describe('StudentOnboardingFormService', () => {
  let service: StudentOnboardingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentOnboardingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
