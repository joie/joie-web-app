import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGoalsStepComponent } from './sub-goals-step.component';

describe('SubGoalsStepComponent', () => {
  let component: SubGoalsStepComponent;
  let fixture: ComponentFixture<SubGoalsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubGoalsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGoalsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
