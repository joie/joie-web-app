import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSessionsComponent } from './teacher-sessions.component';

describe('TeacherSessionsComponent', () => {
  let component: TeacherSessionsComponent;
  let fixture: ComponentFixture<TeacherSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
