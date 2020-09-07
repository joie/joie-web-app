import { StudentOnboardingFormService } from './../../student-onboarding-form.service';
import { Component, AfterViewInit, ɵConsole, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Preferences } from '../../models/student';
import { FormArray, FormGroup } from '@angular/forms';
import { PILLARS } from '../../../../pillar-list/pillar-list.component';

@Component({
  selector: 'app-student-onboarding-stepper',
  templateUrl: './student-onboarding-stepper.component.html',
  styleUrls: ['./student-onboarding-stepper.component.scss'],
})
export class StudentOnboardingStepperComponent implements OnInit, AfterViewInit {
  preferences: Partial<Preferences> = {};
  public steps: string[];
  public selectedStep: number = 0;
  public selectedStepRef = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: StudentOnboardingFormService
  ) {
    this.steps = this.route.snapshot.routeConfig.children.map((child) => {
      return child.path;
    });
  }
  ngOnInit(): void {
    this.setControls();
  }

  setControls() {
    this.formService.setControl([PILLARS, new FormGroup({})]); //todo gotta add all controls here for validation
  }

  ngAfterViewInit() {
    const step = this.steps[0];
    this.router.navigate([step], {
      relativeTo: this.route,
    });
  }

  onActivate(componentRef) {
    if (this.hasForm()) {
      this.selectedStepRef = componentRef;
    } else {
      this.selectedStepRef = null;
    }
  }

  hasForm() {
    return this.selectedStep != 0;
  }

  log() {
    console.log('form val', this.formService.form.value);
    console.log('form', this.formService.form);
  }

  isCompleted() {
    return this.selectedStepRef ? this.selectedStepRef.isValid() : true;
  }
  selectionChanged(event: any) {
    // if (this.selectedStepRef) {
    //   Object.assign(this.preferences, this.selectedStepRef.submit());
    // }
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {
      state: { student: this.formService.form.value }, //todo get off student
      relativeTo: this.route,
    });
  }
}
