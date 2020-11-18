import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTeacherInfoComponent } from './account-teacher-info.component';

describe('AccountTeacherInfoComponent', () => {
  let component: AccountTeacherInfoComponent;
  let fixture: ComponentFixture<AccountTeacherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTeacherInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTeacherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
