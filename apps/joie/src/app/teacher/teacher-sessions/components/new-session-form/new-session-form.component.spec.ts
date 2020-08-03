import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSessionFormComponent } from './new-session-form.component';

describe('NewSessionFormComponent', () => {
  let component: NewSessionFormComponent;
  let fixture: ComponentFixture<NewSessionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSessionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
