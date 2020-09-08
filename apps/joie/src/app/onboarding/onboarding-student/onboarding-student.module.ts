import { PillarListModule } from './../../pillar-list/pillar-list.module';
import { NgModule } from '@angular/core';

import { OnboardingStudentRoutingModule } from './onboarding-student-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OnboardingSharedModule } from '../shared/onboarding-shared.module';
import { StudentOnboardingStepperComponent } from './containers/student-onboarding-stepper/student-onboarding-stepper.component';
import { SessionTypesStepComponent } from './components/session-types-step/session-types-step.component';
import { WelcomeStepComponent } from './components/welcome-step/welcome-step.component';
import { SummaryStepComponent } from './components/summary-step/summary-step.component';
import { PillarStepComponent } from './components/pillar-step/pillar-step.component';
import { ActivitiesStepComponent } from './components/activities-step/activities-step.component';
import { ActivitiesBoxComponent } from './components/activities-step/activities-box/activities-box.component';
import { PillarKeywordEmphasisPipe } from '../../home/pipes/pillar-keyword-emphasis/pillar-keyword-emphasis.pipe';

@NgModule({
  declarations: [
    StudentOnboardingStepperComponent,
    PillarStepComponent,
    SessionTypesStepComponent,
    WelcomeStepComponent,
    ActivitiesStepComponent,
    ActivitiesBoxComponent,
    SummaryStepComponent,
  ],
  imports: [OnboardingStudentRoutingModule, SharedModule, OnboardingSharedModule, PillarListModule],
})
export class OnboardingStudentModule {}
