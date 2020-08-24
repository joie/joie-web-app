import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormRepeatitionComponent } from './session-form-repeatitions.component';

describe('SessionFormRepeatitionComponent', () => {
  let component: SessionFormRepeatitionComponent;
  let fixture: ComponentFixture<SessionFormRepeatitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SessionFormRepeatitionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormRepeatitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
