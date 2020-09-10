import { TeacherOnboardingFormService } from './../../services/teacher-onboarding-form.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherOnboarding } from '../../../../models/teacher.model';

@Component({
  templateUrl: './onboarding-stepper.component.html',
  styleUrls: ['./onboarding-stepper.component.scss'],
})
export class OnboardingStepperComponent implements OnInit {
  teacher = {} as TeacherOnboarding;
  currentFormGroup = { status: 'INVALID', value: {} };
  public steps: string[];
  public selectedStep: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: TeacherOnboardingFormService
  ) {}

  log() {
    console.log('form ', this.formService.form);
    console.log('value ', this.formService.form.value);
  }
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
  }

  selectionChanged(event: any) {
    Object.assign(this.teacher, this.currentFormGroup.value);
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {
      state: { teacher: this.teacher },
      relativeTo: this.route,
    });
  }
}
