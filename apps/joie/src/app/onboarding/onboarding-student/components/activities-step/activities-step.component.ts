import { FormGroup } from '@angular/forms';
import { StudentOnboardingFormService } from './../../student-onboarding-form.service';
import {
  Component,
  ViewChildren,
  QueryList,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { ActivitiesBoxComponent } from './activities-box/activities-box.component';
import { StorageServiceService } from '../../../shared/storage-service.service';
import { Pillar } from '../../../../sessions/models/session';
import { PILLARS } from '../../../../pillar-list/pillar-list.component';
import { merge } from 'lodash';

@Component({
  selector: 'app-activities-step',
  templateUrl: './activities-step.component.html',
  styleUrls: ['./activities-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesStepComponent implements AfterViewInit {
  @ViewChildren(ActivitiesBoxComponent) activityBoxes: QueryList<ActivitiesBoxComponent>;
  selectedPillars = [];
  afterViewInit = false;
  pillarEnum = Pillar;

  constructor(
    public onboardingService: StudentOnboardingService,
    private storage: StorageServiceService,
    private formService: StudentOnboardingFormService
  ) {
    this.selectedPillars = Object.keys(this.formService.form.value.pillars);
  }

  get pillarsForm() {
    return this.formService.form.controls[PILLARS] as FormGroup;
  }
  ngAfterViewInit(): void {
    this.activityBoxes.toArray().forEach((box) => {
      box.subForm.valueChanges.subscribe((changedValue) => {
        this.pillarsForm.get(box.pillar).reset();
        merge(this.formService.form.value, {
          [PILLARS]: { [box.pillar]: box.submit() },
        }); //todo not the best way to set value but the only one worked for me
      });
    });
  }

  isValid() {
    return this.activityBoxes ? this.activityBoxes.toArray().every((box) => box.form.valid) : false;
  }
}
