import { Component, OnInit, ViewChild } from '@angular/core';

interface TeacherData {
  firstNameCtrl: string;
  lastNameCtrl: string;
  emailCtrl: string;
  phoneNumberCtrl: string;
  sessionAreaCtrl: string;
  focusGroupsCtrl: Array<string>;
  sesionTypesCtrl: Array<string>;
  teachingEpCtrl: string;
  teachingPortfolioUrlCtrl: string;
  addedValueDescriptionCtrl: string;
}

@Component({
  selector: 'app-onboarding-stepper',
  templateUrl: './onboarding-stepper.component.html',
  styleUrls: ['./onboarding-stepper.component.scss'],
})
export class OnboardingStepperComponent implements OnInit {
  teacherData = {} as TeacherData;

  constructor() {}

  ngOnInit() {}

  collectStepData(stepData) {
    Object.assign(this.teacherData, stepData);
  }
  submitData(stepData) {
    this.collectStepData(stepData);
    console.log(this.teacherData);
    //todo this.TeacherOnboardingApiService.submitTeacherData(this.teacherData)
  }
}
