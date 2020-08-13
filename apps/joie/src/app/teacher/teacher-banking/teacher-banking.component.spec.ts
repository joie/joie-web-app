import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBankingComponent } from './teacher-banking.component';

describe('TeacherBankingComponent', () => {
  let component: TeacherBankingComponent;
  let fixture: ComponentFixture<TeacherBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
