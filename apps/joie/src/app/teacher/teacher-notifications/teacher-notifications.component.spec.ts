import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNotificationsComponent } from './teacher-notifications.component';

describe('TeacherNotificationsComponent', () => {
  let component: TeacherNotificationsComponent;
  let fixture: ComponentFixture<TeacherNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherNotificationsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
