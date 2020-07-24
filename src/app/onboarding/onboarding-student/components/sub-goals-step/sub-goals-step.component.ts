import { Component, OnInit } from '@angular/core';
import { StudentOnboardingService } from '../../service/student-onboarding.service';

@Component({
  selector: 'app-sub-goals-step',
  templateUrl: './sub-goals-step.component.html',
  styleUrls: ['./sub-goals-step.component.scss'],
})
export class SubGoalsStepComponent implements OnInit {
  constructor(public onboardingService: StudentOnboardingService) {}

  ngOnInit(): void {}
}
