import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingStepperComponent } from './containers/onboarding-stepper/onboarding-stepper.component';

const routes: Routes = [{ path: '', component: OnboardingStepperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingTeacherRoutingModule {}
