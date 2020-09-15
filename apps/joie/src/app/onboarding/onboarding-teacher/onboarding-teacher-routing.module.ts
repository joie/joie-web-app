import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingStepperComponent } from './containers/onboarding-stepper/onboarding-stepper.component';
// import { PersonalInfoStepComponent } from './components/personal-info-step/personal-info-step.component';
import { WhyJoieStepComponent } from './components/why-joie-step/why-joie-step.component';
import { TeachingExperienceStepComponent } from './components/teaching-experience-step/teaching-experience-step.component';
import { OnlinePresenceStepComponent } from './components/online-presence-step/online-presence-step.component';
import { SessionFocusAreaStepComponent } from './components/session-focus-area-step/session-focus-area-step.component';
import { PartnerUpComponent } from './containers/partner-up/partner-up.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerUpComponent,
  },
  { path: 'aboard', redirectTo: 'aboard/personal-info', pathMatch: 'full' },
  {
    path: 'aboard',
    component: OnboardingStepperComponent,
    children: [
      // {
      //   path: 'Personal information',
      //   component: PersonalInfoStepComponent,
      // },
      {
        path: 'Teaching experience',
        component: TeachingExperienceStepComponent,
      },
      {
        path: 'Your market',
        component: SessionFocusAreaStepComponent,
      },
      {
        path: 'Your teaching style',
        component: OnlinePresenceStepComponent,
      },
      {
        path: 'Why Joie',
        component: WhyJoieStepComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingTeacherRoutingModule {}
