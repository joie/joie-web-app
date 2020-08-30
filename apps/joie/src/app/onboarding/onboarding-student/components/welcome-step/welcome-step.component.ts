import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StudentOnboardingService } from '../../service/student-onboarding.service';

@Component({
  selector: 'app-welcome-step',
  templateUrl: './welcome-step.component.html',
  styleUrls: ['./welcome-step.component.scss'],
})
export class WelcomeStepComponent implements OnInit {
  displayName;
  constructor(public onboardingService: StudentOnboardingService) {}

  ngOnInit(): void {
    this.displayName = history.state.displayName;
  }
}
