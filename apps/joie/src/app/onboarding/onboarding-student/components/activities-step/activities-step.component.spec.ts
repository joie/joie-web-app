import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesStepComponent } from './activities-step.component';

describe('ActivitiesStepComponent', () => {
  let component: ActivitiesStepComponent;
  let fixture: ComponentFixture<ActivitiesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesStepComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
