import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SubGoalsBoxComponent } from './sub-goals-box/sub-goals-box.component';

@Component({
  selector: 'app-sub-goals-step',
  templateUrl: './sub-goals-step.component.html',
  styleUrls: ['./sub-goals-step.component.scss'],
})
export class SubGoalsStepComponent implements AfterViewInit {
  @ViewChildren(SubGoalsBoxComponent) subgoalBoxes: QueryList<
    SubGoalsBoxComponent
  >;
  formGroup: FormGroup;
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
    this.formGroup = this.formBuilder.group({});
  }

  ngAfterViewInit(): void {
    const subgoalSets = this.subgoalBoxes.toArray(); //first i pass data to build low level forms, than i add a top-level control to it here
    subgoalSets.forEach((set) => {
      this.formGroup.addControl(set.title, set.formGroup);
    });
  }
}
