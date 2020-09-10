import { TeacherOnboardingFormService } from './../../services/teacher-onboarding-form.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './onboarding-stepper.component.html',
  styleUrls: ['./onboarding-stepper.component.scss'],
})
export class OnboardingStepperComponent implements OnInit {
  public steps: string[];
  public selectedStep: number = 0;
  public selectedStepRef = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: TeacherOnboardingFormService,
    private cdRef: ChangeDetectorRef
  ) {
    this.steps = this.route.snapshot.routeConfig.children.map((child) => {
      return child.path;
    });
  }

  log() {
    console.log('form ', this.formService.form);
    console.log('value ', this.formService.form.value);
  }
  ngOnInit() {
    let step = this.steps[0];
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

  isCompleted() {
    return this.selectedStepRef ? this.selectedStepRef.isValid() : true;
  }

  selectionChanged(event: any) {
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {
      relativeTo: this.route,
    });
  }
}
