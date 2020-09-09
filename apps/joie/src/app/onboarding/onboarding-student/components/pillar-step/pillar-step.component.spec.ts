import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillarStepComponent } from './pillar-step.component';

describe('PillarStepComponent', () => {
  let component: PillarStepComponent;
  let fixture: ComponentFixture<PillarStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PillarStepComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillarStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
