import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStudentInfoComponent } from './account-student-info.component';

describe('AccountStudentInfoComponent', () => {
  let component: AccountStudentInfoComponent;
  let fixture: ComponentFixture<AccountStudentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountStudentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
