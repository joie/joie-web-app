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
export class SubGoalsStepComponent implements AfterViewInit {
  @ViewChildren(SubGoalsBoxComponent) subgoalBoxes: QueryList<SubGoalsBoxComponent>;
  formGroup: FormGroup;
  boxesFormGroup: FormGroup = new FormGroup({});
  selectedPillars = [];

  // movementEnum = MovementActivities;
  // emotionsEnum = EmotionsActivities;
  // connectionsEnum = ConnectionsActivities;
  // professionalEnum = ProfessionalActivities;
  // spiritEnum = SpiritActivities;

  // activities = [];
  // get movementKeys() {
  //   return Object.keys(this.movementEnum);
  // }
  // get emotionsKeys() {
  //   return Object.keys(this.emotionsEnum);
  // }
  // get connectionsKeys() {
  //   return Object.keys(this.connectionsEnum);
  // }
  // get professionalKeys() {
  //   return Object.keys(this.professionalEnum);
  // }
  // get spiritKeys() {
  //   return Object.keys(this.spiritEnum);
  // }

  goals = [
    {
      title: 'JoieConnections',
      subgoals: [
        { title: 'Social interactions', selected: false },
        { title: 'Friendships', selected: false },
        { title: 'Parenting', selected: false },
        { title: 'Relationships', selected: false },
        { title: 'Dating', selected: false },
      ],
    },
    {
      title: 'JoieProfessional',
      subgoals: [
        { title: 'Professional development', selected: false },
        { title: 'Financial stability', selected: false },
        { title: 'Satisfaction at work', selected: false },
      ],
    },
  ]; // todo replace with dynamic data (at least hardcode all the goals and subgoal sets to  implement the whole flow)
  constructor(
    public onboardingService: StudentOnboardingService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      subgoalsCtrl: this.boxesFormGroup,
      activities: new FormArray([]),
    });

    this.selectedPillars = history.state.student.pillars;
  }

  submit() {
    let selectedActivities = [];
    console.log(this.subgoalBoxes.toArray());
    let activityBoxes = this.subgoalBoxes.toArray();
    activityBoxes.forEach((box) => {
      console.log(box.submit());
      selectedActivities = selectedActivities.concat(box.submit());
    });

    console.log('sela', selectedActivities);
    return { activities: selectedActivities };
  }
  ngAfterViewInit(): void {
    const subgoalSets = this.subgoalBoxes.toArray(); //first i pass data to build low level forms, than i add a top-level control to it here
    console.log(subgoalSets);
    subgoalSets.forEach((set) => {
      // this.boxesFormGroup.addControl(set.title, set.formGroup); // todo very important part !!
    });
  }
}
