import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountNotificationSetingsComponent } from '../../account-notification-setings/account-notification-setings.component';

describe('AccountNotificationSetingsComponent', () => {
  let component: AccountNotificationSetingsComponent;
  let fixture: ComponentFixture<AccountNotificationSetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountNotificationSetingsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNotificationSetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
