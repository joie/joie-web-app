import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormRepeatComponent } from './session-form-repeat.component';

describe('SessionFormRepeatComponent', () => {
  let component: SessionFormRepeatComponent;
  let fixture: ComponentFixture<SessionFormRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionFormRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
