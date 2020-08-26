import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSidenavComponent } from './account-sidenav.component';

describe('AccountSidenavComponent', () => {
  let component: AccountSidenavComponent;
  let fixture: ComponentFixture<AccountSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
