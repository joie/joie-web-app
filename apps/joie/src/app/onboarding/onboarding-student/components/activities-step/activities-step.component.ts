import { Component, ViewChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SubGoalsBoxComponent } from './sub-goals-box/sub-goals-box.component';

@Component({
  selector: 'app-activities-step',
  templateUrl: './activities-step.component.html',
  styleUrls: ['./activities-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesStepComponent {
  @ViewChildren(SubGoalsBoxComponent) activityBoxes: QueryList<SubGoalsBoxComponent>; //todo rename
  formGroup: FormGroup;
  selectedPillars = [];
  afterViewInit = false;

  constructor(
    public onboardingService: StudentOnboardingService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      activities: new FormArray([]),
    });

    this.selectedPillars = history.state.student.pillars;
  }

  isValid() {
    return this.activityBoxes ? this.activityBoxes.toArray().every((box) => box.isValid()) : false;
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
