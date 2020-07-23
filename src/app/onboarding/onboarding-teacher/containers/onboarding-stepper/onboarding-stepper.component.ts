import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  currentFormGroup = { status: 'INVALID', value: {} };
  public steps: string[];
  public selectedStep: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.steps = this.route.snapshot.routeConfig.children.map((child) => {
      return child.path;
    });
    let step = this.steps[0];
    this.router.navigate([step], {
      relativeTo: this.route,
    });
  }

  onActivate(componentRef) {
    this.currentFormGroup = componentRef.formGroup;
    console.log(this.currentFormGroup);
  }

  selectionChanged(event: any) {
    Object.assign(this.teacherData, this.currentFormGroup.value);
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {
      state: { teacherData: this.teacherData },
      relativeTo: this.route,
    });
  }
}
