import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormTimeSlotsComponent } from './session-form-time-slots.component';

describe('SessionFormTimeSlotsComponent', () => {
  let component: SessionFormTimeSlotsComponent;
  let fixture: ComponentFixture<SessionFormTimeSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionFormTimeSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormTimeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
