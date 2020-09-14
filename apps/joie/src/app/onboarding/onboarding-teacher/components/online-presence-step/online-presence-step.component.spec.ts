import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePresenceStepComponent } from './online-presence-step.component';

describe('OnlinePresenceStepComponent', () => {
  let component: OnlinePresenceStepComponent;
  let fixture: ComponentFixture<OnlinePresenceStepComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OnlinePresenceStepComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePresenceStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
