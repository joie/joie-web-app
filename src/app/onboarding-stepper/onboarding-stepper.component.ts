import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalInfoStepComponent } from '../teacher-onboarding-steps/personal-info-step/personal-info-step.component';
import { WhyJoieStepComponent } from '../teacher-onboarding-steps/why-joie-step/why-joie-step.component';

@Component({
  selector: 'app-onboarding-stepper',
  templateUrl: './onboarding-stepper.component.html',
  styleUrls: ['./onboarding-stepper.component.scss'],
})
export class OnboardingStepperComponent implements OnInit {
  @ViewChild('step1') step1: PersonalInfoStepComponent;
  @ViewChild('step5') step5: WhyJoieStepComponent;

  teacherData = { firstNameCtrl: '' }; // TODO type with teacherStepperDataInterface

  constructor() {}

  ngOnInit() {}

  collectStepData(stepData) {
    Object.assign(this.teacherData, stepData);
  }
  submitData(stepData) {
    this.collectStepData(stepData);
  }
}
