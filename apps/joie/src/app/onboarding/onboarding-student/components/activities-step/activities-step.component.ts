import { FormGroup, FormControl } from '@angular/forms';
import { StudentOnboardingFormService } from './../../student-onboarding-form.service';
import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ActivitiesBoxComponent } from './activities-box/activities-box.component';
import { Pillar } from '../../../../sessions/models/session';
import { PILLARS } from '../../../../pillar-list/pillar-list.component';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-activities-step',
  templateUrl: './activities-step.component.html',
  styleUrls: ['./activities-step.component.scss'],
  providers: [LowerCasePipe],
})
export class ActivitiesStepComponent implements AfterViewInit {
  @ViewChildren(ActivitiesBoxComponent) activityBoxes: QueryList<ActivitiesBoxComponent>;
  selectedPillars = [];
  afterViewInit = false;
  pillarEnum = Pillar;

  constructor(
    private formService: StudentOnboardingFormService,
    private lowercasePipe: LowerCasePipe
  ) {
    this.selectedPillars = Object.keys(this.formService.form.value.pillars);
  }

  get pillarsForm() {
    return this.formService.form.controls[PILLARS] as FormGroup;
  }
  ngAfterViewInit(): void {
    this.activityBoxes.toArray().forEach((box) => {
      box.subForm.valueChanges.subscribe(() => {
        let activityFormArray = this.formService.getActivityFormArray(
          this.lowercasePipe.transform(box.pillar)
        );
        activityFormArray.clear();
        box.values.forEach((value) => {
          activityFormArray.push(new FormControl(value));
        });
      });
    });
  }

  isValid() {
    return this.activityBoxes ? this.activityBoxes.toArray().every((box) => box.form.valid) : false;
  }
}
