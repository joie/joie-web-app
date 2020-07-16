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
  constructor() {}

  ngOnInit() {}

  logData() {
    console.log(this.step1);
  }
}
