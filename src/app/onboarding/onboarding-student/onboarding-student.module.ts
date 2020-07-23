import { NgModule } from '@angular/core';

import { OnboardingStudentRoutingModule } from './onboarding-student-routing.module';
import { OnboardingStudentComponent } from './onboarding-student.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OnboardingSharedModule } from '../shared/onboarding-shared.module';

@NgModule({
  declarations: [OnboardingStudentComponent],
  imports: [
    OnboardingStudentRoutingModule,
    SharedModule,
    OnboardingSharedModule,
  ],
})
export class OnboardingStudentModule {}
