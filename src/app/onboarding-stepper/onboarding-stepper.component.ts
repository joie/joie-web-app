import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalInfoStepComponent } from '../teacher-onboarding-steps/personal-info-step/personal-info-step.component';

@Component({
  selector: 'app-onboarding-stepper',
  templateUrl: './onboarding-stepper.component.html',
  styleUrls: ['./onboarding-stepper.component.scss'],
})
export class OnboardingStepperComponent implements OnInit {
  @ViewChild('stepper') stepper: OnboardingStepperComponent;
  @ViewChild('step1') step1: PersonalInfoStepComponent;

  teacherData = { firstNameCtrl: '' };

  constructor() {}

  ngOnInit() {}

  collectStepData(stepData) {
    console.log('collected on this step: ', stepData);
    Object.assign(this.teacherData, stepData);
  }
  submitData(stepData) {
    this.collectStepData(stepData);
    console.log('whole damn data: ', this.teacherData);
  }
  logData() {
    console.log(this.step1);
  }
}
