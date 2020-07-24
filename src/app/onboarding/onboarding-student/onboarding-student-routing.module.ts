import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { OnboardingStudentComponent } from './onboarding-student.component';
import { GoalStepComponent } from './components/goal-step/goal-step.component';
import { StudentOnboardingStepperComponent } from './containers/student-onboarding-stepper/student-onboarding-stepper.component';

const routes: Routes = [
  {
    path: '',
    component: StudentOnboardingStepperComponent,
    children: [
      {
        path: 'goal',
        component: GoalStepComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingStudentRoutingModule {}
