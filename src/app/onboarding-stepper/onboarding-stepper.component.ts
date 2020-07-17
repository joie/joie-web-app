import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-onboarding-stepper',
  templateUrl: './onboarding-stepper.component.html',
  styleUrls: ['./onboarding-stepper.component.scss'],
})
export class OnboardingStepperComponent implements OnInit {
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
