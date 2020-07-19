import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingStudentComponent } from './onboarding-student.component';

const routes: Routes = [{ path: '', component: OnboardingStudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingStudentRoutingModule { }
