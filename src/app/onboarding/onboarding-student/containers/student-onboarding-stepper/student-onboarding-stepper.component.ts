import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatHorizontalStepper } from '@angular/material/stepper';

interface StudentOnboardingData {}

@Component({
  selector: 'app-student-onboarding-stepper',
  templateUrl: './student-onboarding-stepper.component.html',
  styleUrls: ['./student-onboarding-stepper.component.scss'],
})
export class StudentOnboardingStepperComponent implements AfterViewInit {
  @ViewChild('stepper') stepper: MatHorizontalStepper;
  studentData = {} as StudentOnboardingData;
  currentFormGroup = { status: 'INVALID', value: {} };
  public steps: string[];
  public selectedStep: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.steps = this.route.snapshot.routeConfig.children.map((child) => {
      return child.path;
    });
    let step = this.steps[0];
    this.router.navigate([step], {
      relativeTo: this.route,
    });
    this.stepper.reset(); //todo mb gotta add condition but the thing is that sometimes the builtIn onStep works slower than the selectionChange event triggerd here and replaces curentFormgGroup before the step was opened making the current step uncompleteds
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
