import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionOwnerLinksComponent } from './session-owner-links.component';

describe('SessionOwnerLinksComponent', () => {
  let component: SessionOwnerLinksComponent;
  let fixture: ComponentFixture<SessionOwnerLinksComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SessionOwnerLinksComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionOwnerLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
