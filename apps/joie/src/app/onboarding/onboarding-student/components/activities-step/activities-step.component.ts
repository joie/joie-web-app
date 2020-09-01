import { PILLARS } from './../pillar-step/pillar-step.component';
import { Component, ViewChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { ActivitiesBoxComponent } from './activities-box/activities-box.component';
import { StorageServiceService, USER_ONBOARDING } from '../../../shared/storage-service.service';

@Component({
  selector: 'app-activities-step',
  templateUrl: './activities-step.component.html',
  styleUrls: ['./activities-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesStepComponent {
  @ViewChildren(ActivitiesBoxComponent) activityBoxes: QueryList<ActivitiesBoxComponent>;
  selectedPillars = [];
  afterViewInit = false;

  constructor(
    public onboardingService: StudentOnboardingService,
    private storage: StorageServiceService
  ) {
    // this.selectedPillars = ['JoieMovement', 'JoeSpirit'];
    this.selectedPillars = history.state.student.pillars;
    // this.storage.getItem(USER_ONBOARDING).subscribe((featureCache) => {
    //   this.selectedPillars = featureCache[PILLARS];
    //   console.log(this.selectedPillars);
    // });
  }

  isValid() {
    if (history.state.student.activities) {
      // case restored from cache. Step is cached only if completed, so if it has activities - it was completed.
      return true;
    }
    return this.activityBoxes
      ? this.activityBoxes.toArray().every((box) => box.formGroup.valid)
      : false;
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
