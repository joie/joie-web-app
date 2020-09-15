import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOnboardingStepperComponent } from './student-onboarding-stepper.component';

describe('StudentOnboardingStepperComponent', () => {
  let component: StudentOnboardingStepperComponent;
  let fixture: ComponentFixture<StudentOnboardingStepperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StudentOnboardingStepperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOnboardingStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
