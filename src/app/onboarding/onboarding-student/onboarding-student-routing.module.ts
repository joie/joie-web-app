import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalStepComponent } from './components/goal-step/goal-step.component';
import { StudentOnboardingStepperComponent } from './containers/student-onboarding-stepper/student-onboarding-stepper.component';
import { SessionTypesStepComponent } from './components/session-types-step/session-types-step.component';
import { WelcomeStepComponent } from './components/welcome-step/welcome-step.component';
import { SubGoalsStepComponent } from './components/sub-goals-step/sub-goals-step.component';

const routes: Routes = [
  {
    path: '',
    component: StudentOnboardingStepperComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeStepComponent,
      },
      {
        path: 'goal',
        component: GoalStepComponent,
      },
      {
        path: 'sub-goals',
        component: SubGoalsStepComponent,
      },
      {
        path: 'session-types',
        component: SessionTypesStepComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingStudentRoutingModule {}
