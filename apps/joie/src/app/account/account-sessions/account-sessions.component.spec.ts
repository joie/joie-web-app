import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSessionsComponent } from './account-sessions.component';

describe('AccountSessionsComponent', () => {
  let component: AccountSessionsComponent;
  let fixture: ComponentFixture<AccountSessionsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AccountSessionsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
