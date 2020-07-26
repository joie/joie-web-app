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
  //= { value: {}, subformsStatus: {}, status: 'INVALID' };
  goals = [
    {
      title: 'JoieConnections',
      subgoals: [
        { id: 1, title: 'Social interactions' }, // rm , isSelected: false
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

  // addSubgoalSets(){
  //   const subgoalSets = this.subgoalBoxes.toArray(); //first i pass data to build low level forms, than i add a top-level control to it here

  // }
  ngAfterViewInit(): void {
    const subgoalSets = this.subgoalBoxes.toArray(); //first i pass data to build low level forms, than i add a top-level control to it here

    subgoalSets.forEach((set) => {
      this.formGroup.controls[set.title] = set.formGroup;
      this.formGroup.value[set.title] = set.formGroup.value['subgoalsCtrl'];
    });
    // todo ok, seems like it doesn't reassign nested form values to here..
    // mb there's a right way to do this, but
    console.log(
      'subgoals step formGroup after initializing nested groups(boxes)',
      this.formGroup
    );

    // this.addSubgoalSets();
    // console.log(this.subgoalBoxes.toArray());
    // const subgoalSets = this.subgoalBoxes.toArray();

    // subgoalSets.forEach((set) => {
    //   this.formGroup[set.title] = set
    // })

    // //todo mb gotta set subgoals-box.components's subgoalsData to private
    // subgoalSets.forEach((set) => {
    //   console.log('set', set);
    //   this.formGroup.value[set.title] = set.formGroup.value;
    //   this.formGroup.subformsStatus[set.title] = set.formGroup.status;
    // });

    // this.formGroup.status = this.formStatus();
  }

  // isValid() {
  //   console.log(this.formStatus());
  // }

  // formStatus() { // this is unnecessary, it appears that i can just wrap it in a formGroup
  //   console.log(this.formGroup);
  //   if (Object.keys(this.formGroup.subformsStatus).length < 1) {
  //     return 'INVALID';
  //   } else {
  //     let allStatuses = [];
  //     Object.keys(this.formGroup.subformsStatus).forEach((subform) => {
  //       console.log(this.formGroup.subformsStatus[subform]);
  //       allStatuses.push(this.formGroup.subformsStatus[subform]);
  //     });
  //     console.log(allStatuses);
  //     return allStatuses.some((status) => status === 'INVALID')
  //       ? 'INVALID'
  //       : 'VALID';
  //   }
  // }
}
