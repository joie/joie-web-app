import { NgModule } from '@angular/core';

import { OnboardingStudentRoutingModule } from './onboarding-student-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OnboardingSharedModule } from '../shared/onboarding-shared.module';
import { StudentOnboardingStepperComponent } from './containers/student-onboarding-stepper/student-onboarding-stepper.component';
import { GoalStepComponent } from './components/goal-step/goal-step.component';
import { SessionTypesStepComponent } from './components/session-types-step/session-types-step.component';

@NgModule({
  declarations: [
    StudentOnboardingStepperComponent,
    GoalStepComponent,
    SessionTypesStepComponent,
  ],
  imports: [
    OnboardingStudentRoutingModule,
    SharedModule,
    OnboardingSharedModule,
  ],
})
export class OnboardingStudentModule {}
