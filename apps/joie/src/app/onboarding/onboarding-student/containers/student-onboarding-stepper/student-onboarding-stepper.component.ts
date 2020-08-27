import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

interface Student {}

@Component({
  selector: 'app-student-onboarding-stepper',
  templateUrl: './student-onboarding-stepper.component.html',
  styleUrls: ['./student-onboarding-stepper.component.scss'],
})
export class StudentOnboardingStepperComponent implements OnInit, AfterViewInit {
  student = {} as Student;
  currentFormGroup = new FormGroup({});
  public steps: string[];
  public selectedStep: number = 0;
  public selectedStepRef; // todo element ref

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
    if (!this.hasForm()) {
      // welcome step doesn't have form; so does not the summary step
      this.currentFormGroup = componentRef.formGroup;
      this.selectedStepRef = componentRef;
    } else {
      this.currentFormGroup = new FormGroup({});
    }
  }

  hasForm() {
    return [0, this.steps.length - 1].includes(this.selectedStep);
  }

  selectionChanged(event: any) {
    Object.assign(this.student, this.currentFormGroup.value); //todo remove later
    if (!this.hasForm()) {
      Object.assign(this.student, this.selectedStepRef.submit());
    }
    console.log(this.student);
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {
      state: { student: this.student },
      relativeTo: this.route,
    });
  }
}
