import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
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
        { id: 1, title: 'Social interactions' },
        { id: 2, title: 'Friendships' },
        { id: 3, title: 'Parenting' },
        { id: 4, title: 'Relationships' },
        { id: 5, title: 'Dating' },
      ],
    },
    {
      title: 'JoieProfessional',
      subgoals: [
        { id: 1, title: 'Professional development' },
        { id: 2, title: 'Financial stability' },
        { id: 3, title: 'Satisfaction at work' },
      ],
    },
  ];
  constructor(
    public onboardingService: StudentOnboardingService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  ngAfterViewInit(): void {
    const subgoalSets = this.subgoalBoxes.toArray(); //first i pass data to build low level forms, than i add a top-level control to it here

    subgoalSets.forEach((set) => {
      this.formGroup.controls[set.title] = set.formGroup;
      this.formGroup.value[set.title] = set.formGroup.value['subgoalsCtrl'];
    });
    // todo ok, seems like it doesn't reassign step root level fromGroup value to nested form values  here..
    // mb there's a right way to do this, but yet I'll try it manually
  }
}
