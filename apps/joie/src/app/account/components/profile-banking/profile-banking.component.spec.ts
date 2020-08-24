import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBankingComponent } from './profile-banking.component';

describe('ProfileBankingComponent', () => {
  let component: ProfileBankingComponent;
  let fixture: ComponentFixture<ProfileBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
