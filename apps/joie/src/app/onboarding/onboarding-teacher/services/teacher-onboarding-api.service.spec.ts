import { TestBed } from '@angular/core/testing';

import { TeacherOnboardingApiService } from './teacher-onboarding-api.service';

describe('TeacherOnboardingApiService', () => {
  let service: TeacherOnboardingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherOnboardingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
