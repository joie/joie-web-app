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
import { StorageServiceService, USER_ONBOARDING } from '../../../shared/storage-service.service';
import { Pillar } from '../../../../sessions/models/session';

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
    // this.selectedPillars = ['JoieMovement', 'JoeSpirit'];
    this.selectedPillars = Object.keys(this.formService.form.value.pillars);
    // this.storage.getItem(USER_ONBOARDING).subscribe((featureCache) => {
    //   this.selectedPillars = featureCache[PILLARS];
    //   console.log(this.selectedPillars);
    // });
  }
  ngAfterViewInit(): void {
    this.activityBoxes.toArray().forEach((box) => {
      box.subForm.valueChanges.subscribe((changedValue) => {
        console.log(changedValue);
      });
    });
  }

  isValid() {
    if (history.state.student.activities) {
      // case restored from cache. Step is cached only if completed, so if it has activities - it was completed.
      return true;
    }
    return this.activityBoxes ? this.activityBoxes.toArray().every((box) => box.form.valid) : false;
  }

  submit() {
    let selectedActivities = [];
    let activityBoxes = this.activityBoxes.toArray();
    activityBoxes.forEach((box) => {
      selectedActivities = selectedActivities.concat(box.submit());
    });

    return { activities: selectedActivities };
  }
}
