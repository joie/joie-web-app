import { length } from 'ramda';
import { Component, ViewChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { ActivitiesBoxComponent } from './activities-box/activities-box.component';

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

  constructor(public onboardingService: StudentOnboardingService) {
    this.selectedPillars = history.state.student.pillars;
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
