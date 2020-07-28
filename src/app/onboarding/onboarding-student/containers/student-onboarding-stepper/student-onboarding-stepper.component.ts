import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface StudentOnboardingData {}

@Component({
  selector: 'app-student-onboarding-stepper',
  templateUrl: './student-onboarding-stepper.component.html',
  styleUrls: ['./student-onboarding-stepper.component.scss'],
})
export class StudentOnboardingStepperComponent
  implements OnInit, AfterViewInit {
  studentData = {} as StudentOnboardingData;
  currentFormGroup = { status: 'INVALID', value: {} };
  public steps: string[];
  public selectedStep: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.steps = this.route.snapshot.routeConfig.children.map((child) => {
      return child.path;
    });
  }

  ngAfterViewInit() {
    let step = this.steps[0];
    this.router.navigate([step], {
      relativeTo: this.route,
    });
  }

  onActivate(componentRef) {
    if (![0, this.steps.length - 1].includes(this.selectedStep)) {
      // welcome step doesn't have form; so does not the summary step
      this.currentFormGroup = componentRef.formGroup;
    }
  }

  selectionChanged(event: any) {
    Object.assign(this.studentData, this.currentFormGroup.value);
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {
      state: { studentData: this.studentData },
      relativeTo: this.route,
    });
  }
}
