import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormDateTimeSlotsComponent } from './session-form-date-time-slots.component';

describe('SessionFormTimeSlotsComponent', () => {
  let component: SessionFormDateTimeSlotsComponent;
  let fixture: ComponentFixture<SessionFormDateTimeSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SessionFormDateTimeSlotsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormDateTimeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
