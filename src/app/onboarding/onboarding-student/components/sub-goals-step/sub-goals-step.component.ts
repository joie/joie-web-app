import { Component, OnInit } from '@angular/core';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-sub-goals-step',
  templateUrl: './sub-goals-step.component.html',
  styleUrls: ['./sub-goals-step.component.scss'],
})
export class SubGoalsStepComponent {
  goals = [
    {
      title: 'JoieConnections',
      subgoals: [
        { id: 1, title: 'Social interactions', isSelected: true },
        { id: 2, title: 'Friendships', isSelected: false },
        { id: 3, title: 'Parenting', isSelected: false },
        { id: 4, title: 'Relationships', isSelected: true },
        { id: 5, title: 'Dating', isSelected: true },
      ],
    },
    {
      title: 'JoieProfessional',
      subgoals: [
        { id: 1, title: 'Professional development', isSelected: true },
        { id: 2, title: 'Financial stability', isSelected: false },
        { id: 3, title: 'Satisfaction at work', isSelected: false },
      ],
    },
  ];
  constructor(public onboardingService: StudentOnboardingService) {}
}
