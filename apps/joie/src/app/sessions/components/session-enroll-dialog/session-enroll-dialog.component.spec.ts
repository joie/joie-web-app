import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEnrollDialogComponent } from './session-enroll-dialog.component';

describe('SessionEnrollDialogComponent', () => {
  let component: SessionEnrollDialogComponent;
  let fixture: ComponentFixture<SessionEnrollDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SessionEnrollDialogComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionEnrollDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
