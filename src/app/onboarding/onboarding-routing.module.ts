import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'teacher',
    loadChildren: () =>
      import('./onboarding-teacher/onboarding-teacher.module').then(
        (m) => m.OnboardingTeacherModule
      ),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./onboarding-student/onboarding-student.module').then(
        (m) => m.OnboardingStudentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
