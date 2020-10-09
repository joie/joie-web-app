import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormDurationComponent } from './session-form-duration.component';

describe('SessionFormDurationComponent', () => {
  let component: SessionFormDurationComponent;
  let fixture: ComponentFixture<SessionFormDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionFormDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
