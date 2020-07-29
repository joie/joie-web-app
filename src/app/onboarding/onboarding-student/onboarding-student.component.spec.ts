import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingStudentComponent } from './onboarding-student.component';

describe('OnboardingStudentComponent', () => {
  let component: OnboardingStudentComponent;
  let fixture: ComponentFixture<OnboardingStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
