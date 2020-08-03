import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingExperienceStepComponent } from './teaching-experience-step.component';

describe('TeachingExperienceStepComponent', () => {
  let component: TeachingExperienceStepComponent;
  let fixture: ComponentFixture<TeachingExperienceStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingExperienceStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingExperienceStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
