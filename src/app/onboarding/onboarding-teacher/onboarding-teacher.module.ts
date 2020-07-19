import { NgModule } from '@angular/core';

import { OnboardingTeacherRoutingModule } from './onboarding-teacher-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

import { OnboardingStepperComponent } from './containers/onboarding-stepper/onboarding-stepper.component';
import { PersonalInfoStepComponent } from './components/personal-info-step/personal-info-step.component';
import { WhyJoieStepComponent } from './components/why-joie-step/why-joie-step.component';
import { TeachingExperienceStepComponent } from './components/teaching-experience-step/teaching-experience-step.component';
import { SessionFocusAreaStepComponent } from './components/session-focus-area-step/session-focus-area-step.component';
import { OnlinePresenceStepComponent } from './components/online-presence-step/online-presence-step.component';

@NgModule({
  declarations: [
    OnboardingStepperComponent,
    PersonalInfoStepComponent,
    WhyJoieStepComponent,
    TeachingExperienceStepComponent,
    SessionFocusAreaStepComponent,
    OnlinePresenceStepComponent,
  ],
  imports: [
    OnboardingTeacherRoutingModule,
    SharedModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
})
export class OnboardingTeacherModule {}
