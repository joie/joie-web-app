import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherOnboardingApiService } from '../../services/teacher-onboarding-api.service';

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
  templateUrl: './onboarding-stepper.component.html',
  styleUrls: ['./onboarding-stepper.component.scss'],
})
export class OnboardingStepperComponent implements OnInit {
  teacherData = {} as TeacherData;

  constructor(private apiService: TeacherOnboardingApiService) {}

  ngOnInit() {}

  collectStepData(stepData) {
    Object.assign(this.teacherData, stepData);
  }
  submitData(stepData) {
    this.collectStepData(stepData);
    console.log(this.teacherData);
    //todo this.TeacherOnboardingApiService.submitTeacherData(this.teacherData)
    this.apiService.submitTeacherAccountData(this.teacherData).subscribe();
  }
}
