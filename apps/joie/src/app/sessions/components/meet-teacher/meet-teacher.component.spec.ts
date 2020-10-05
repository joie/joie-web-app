import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTeacherComponent } from './meet-teacher.component';

describe('MeetTeacherComponent', () => {
  let component: MeetTeacherComponent;
  let fixture: ComponentFixture<MeetTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
