import { TeacherOnboardingFormService } from './../../services/teacher-onboarding-form.service';
import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './onboarding-stepper.component.html',
  styleUrls: ['./onboarding-stepper.component.scss'],
})
export class OnboardingStepperComponent implements OnInit, AfterViewChecked {
  public steps: string[];
  public selectedStep = 0;
  public selectedStepRef = null;
  public stepsCompleted = [false, false, false, false, false];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {
    this.steps = this.route.snapshot.routeConfig.children.map((child) => {
      return child.path;
    });
  }

  ngOnInit() {
    const step = this.steps[0];
    this.router.navigate([step], {
      relativeTo: this.route,
    });
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  onActivate(componentRef) {
    this.selectedStepRef = componentRef;
  }

  isCompleted(i) {
    if (i === this.selectedStep && this.selectedStepRef) {
      this.stepsCompleted[i] = this.selectedStepRef.isValid();
    }
    return this.stepsCompleted[i];
    // return this.selectedStepRef ? this.selectedStepRef.isValid() : true;
  }

  selectionChanged(event: any) {
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {
      relativeTo: this.route,
    });
  }
}
