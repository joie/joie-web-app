import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface StudentOnboardingData {}

@Component({
  selector: 'app-student-onboarding-stepper',
  templateUrl: './student-onboarding-stepper.component.html',
  styleUrls: ['./student-onboarding-stepper.component.scss'],
})
export class StudentOnboardingStepperComponent implements OnInit {
  studentData = {} as StudentOnboardingData;
  currentFormGroup = { status: 'VALID', value: {} };
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
    this.currentFormGroup = componentRef.formGroup || this.currentFormGroup; // some steps don't have any forms on
  }
  // todo research why data from the sessionTypes step is collected right after the welcome step
  selectionChanged(event: any) {
    Object.assign(this.studentData, this.currentFormGroup.value);
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {
      state: { studentData: this.studentData },
      relativeTo: this.route,
    });
  }
}
