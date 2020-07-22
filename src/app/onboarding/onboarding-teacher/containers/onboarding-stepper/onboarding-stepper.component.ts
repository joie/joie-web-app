import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeacherOnboardingApiService } from '../../services/teacher-onboarding-api.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';

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
  @ViewChild('step') step: ElementRef;
  teacherData = {} as TeacherData;
  currentFormGroup;
  public steps: string[];
  public selectedStep: number = 0;

  constructor(
    // private apiService: TeacherOnboardingApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.steps = this.route.snapshot.routeConfig.children.map((child) => {
      console.log('child route = ', child);
      return child.path;
    });
    let step = this.steps[0];
    this.router.navigate([step], {
      // state: { teacherData: this.teacherData },
      relativeTo: this.route,
    });
  }

  onActivate(componentRef) {
    console.log(componentRef);
    this.currentFormGroup = componentRef.formGroup;
  }

  selectionChanged(event: any) {
    console.log('sss', this.step);
    console.log('selection changed event ', event);
    Object.assign(this.teacherData, this.currentFormGroup.value);
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {
      state: { teacherData: this.teacherData },
      relativeTo: this.route,
    });
  }

  collectStepData(stepData) {
    //   console.log('collectStepData invoked with: ', stepData);
    //   Object.assign(this.teacherData, stepData);
  }
  // submitData(stepData) {
  //   console.log('im here');
  //   Object.assign(this.teacherData, this.currentFormGroup.value);
  //   console.log(this.teacherData);
  //   //todo this.TeacherOnboardingApiService.submitTeacherData(this.teacherData)
  //   this.apiService.submitTeacherAccountData(this.teacherData).subscribe();
  // }
}
