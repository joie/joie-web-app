import { StudentOnboardingFormService } from './../../student-onboarding-form.service';
import {
  Component,
  AfterViewInit,
  OnInit,
  ChangeDetectorRef,
  AfterViewChecked,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Preferences } from '../../models/student';
import { FormGroup } from '@angular/forms';
import { PILLARS } from '../../../../pillar-list/pillar-list.component';

@Component({
  selector: 'app-student-onboarding-stepper',
  templateUrl: './student-onboarding-stepper.component.html',
  styleUrls: ['./student-onboarding-stepper.component.scss'],
})
export class StudentOnboardingStepperComponent implements OnInit, AfterViewInit, AfterViewChecked {
  preferences: Partial<Preferences> = {};
  public steps: string[];
  public selectedStep: number = 0;
  public selectedStepRef = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: StudentOnboardingFormService,
    private cdRef: ChangeDetectorRef
  ) {
    this.steps = this.route.snapshot.routeConfig.children.map((child) => {
      return child.path;
    });
  }

  ngOnInit(): void {
    this.setControls();
  }

  setControls() {
    this.formService.setControl([PILLARS, new FormGroup({})]);
  }

  ngAfterViewInit() {
    const step = this.steps[0];
    this.router.navigate([step], {
      relativeTo: this.route,
    });
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
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
