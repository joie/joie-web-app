import { NgModule } from '@angular/core';

import { OnboardingStudentRoutingModule } from './onboarding-student-routing.module';
// import { OnboardingStudentComponent } from './onboarding-student.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OnboardingSharedModule } from '../shared/onboarding-shared.module';
import { StudentOnboardingStepperComponent } from './containers/student-onboarding-stepper/student-onboarding-stepper.component';
import { GoalStepComponent } from './components/goal-step/goal-step.component';

@NgModule({
  declarations: [StudentOnboardingStepperComponent, GoalStepComponent],
  imports: [
    OnboardingStudentRoutingModule,
    SharedModule,
    OnboardingSharedModule,
  ],
})
export class OnboardingStudentModule {}
