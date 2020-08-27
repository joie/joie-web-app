import {
  Component,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SubGoalsBoxComponent } from './sub-goals-box/sub-goals-box.component';

@Component({
  selector: 'app-sub-goals-step',
  templateUrl: './sub-goals-step.component.html',
  styleUrls: ['./sub-goals-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubGoalsStepComponent {
  @ViewChildren(SubGoalsBoxComponent) activityBoxes: QueryList<SubGoalsBoxComponent>;
  formGroup: FormGroup;
  selectedPillars = [];

  constructor(
    public onboardingService: StudentOnboardingService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      activities: new FormArray([]),
    });

    this.selectedPillars = history.state.student.pillars;
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
