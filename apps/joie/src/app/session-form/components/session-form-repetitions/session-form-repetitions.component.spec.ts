import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormRepetitionsComponent } from './session-form-repetitions.component';

describe('SessionFormRepetitionsComponent', () => {
  let component: SessionFormRepetitionsComponent;
  let fixture: ComponentFixture<SessionFormRepetitionsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SessionFormRepetitionsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormRepetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
