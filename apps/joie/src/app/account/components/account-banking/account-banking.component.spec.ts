import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountBankingComponent } from '../../account-banking/account-banking.component';

describe('AccountBankingComponent', () => {
  let component: AccountBankingComponent;
  let fixture: ComponentFixture<AccountBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountBankingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
