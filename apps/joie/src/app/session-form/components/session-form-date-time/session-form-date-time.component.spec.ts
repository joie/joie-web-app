import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormDateTimeComponent } from './session-form-date-time.component';

describe('SessionFormDateTimeComponent', () => {
  let component: SessionFormDateTimeComponent;
  let fixture: ComponentFixture<SessionFormDateTimeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SessionFormDateTimeComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
