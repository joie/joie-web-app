import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyJoieStepComponent } from './why-joie-step.component';

describe('WhyJoieStepComponent', () => {
  let component: WhyJoieStepComponent;
  let fixture: ComponentFixture<WhyJoieStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyJoieStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyJoieStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
