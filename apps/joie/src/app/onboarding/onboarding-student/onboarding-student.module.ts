import { NgModule } from '@angular/core';

import { OnboardingStudentRoutingModule } from './onboarding-student-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OnboardingSharedModule } from '../shared/onboarding-shared.module';
import { StudentOnboardingStepperComponent } from './containers/student-onboarding-stepper/student-onboarding-stepper.component';
import { SessionTypesStepComponent } from './components/session-types-step/session-types-step.component';
import { WelcomeStepComponent } from './components/welcome-step/welcome-step.component';
import { SubGoalsStepComponent } from './components/sub-goals-step/sub-goals-step.component';
import { SubGoalsBoxComponent } from './components/sub-goals-step/sub-goals-box/sub-goals-box.component';
import { SummaryStepComponent } from './components/summary-step/summary-step.component';
import { PillarStepComponent } from './components/pillar-step/pillar-step.component';

@NgModule({
  declarations: [
    StudentOnboardingStepperComponent,
    PillarStepComponent,
    SessionTypesStepComponent,
    WelcomeStepComponent,
    SubGoalsStepComponent,
    SubGoalsBoxComponent,
    SummaryStepComponent,
  ],
  imports: [OnboardingStudentRoutingModule, SharedModule, OnboardingSharedModule],
})
export class OnboardingStudentModule {}
