import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFocusAreaStepComponent } from './session-focus-area-step.component';

describe('SessionFocusAreaStepComponent', () => {
  let component: SessionFocusAreaStepComponent;
  let fixture: ComponentFixture<SessionFocusAreaStepComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SessionFocusAreaStepComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFocusAreaStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
