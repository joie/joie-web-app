import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingStepperComponent } from './containers/onboarding-stepper/onboarding-stepper.component';
import { PersonalInfoStepComponent } from './components/personal-info-step/personal-info-step.component';
import { WhyJoieStepComponent } from './components/why-joie-step/why-joie-step.component';
import { TeachingExperienceStepComponent } from './components/teaching-experience-step/teaching-experience-step.component';
import { OnlinePresenceStepComponent } from './components/online-presence-step/online-presence-step.component';
import { SessionFocusAreaStepComponent } from './components/session-focus-area-step/session-focus-area-step.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingStepperComponent,
    children: [
      {
        path: 'personal-info',
        component: PersonalInfoStepComponent,
        children: [],
      },
      {
        path: 'teaching-experience',
        component: TeachingExperienceStepComponent,
        children: [],
      },
      {
        path: 'focus-area',
        component: SessionFocusAreaStepComponent,
        children: [],
      },
      {
        path: 'online-presence',
        component: OnlinePresenceStepComponent,
        children: [],
      },
      {
        path: 'value-to-students',
        component: WhyJoieStepComponent,
        children: [],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingTeacherRoutingModule {}
