import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoStepComponent } from './personal-info-step.component';

describe('PersonalInfoStepComponent', () => {
  let component: PersonalInfoStepComponent;
  let fixture: ComponentFixture<PersonalInfoStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
