import { NgModule } from '@angular/core';

import { OnboardingTeacherRoutingModule } from './onboarding-teacher-routing.module';

import { OnboardingStepperComponent } from './containers/onboarding-stepper/onboarding-stepper.component';
import { PersonalInfoStepComponent } from './components/personal-info-step/personal-info-step.component';
import { WhyJoieStepComponent } from './components/why-joie-step/why-joie-step.component';
import { TeachingExperienceStepComponent } from './components/teaching-experience-step/teaching-experience-step.component';
import { SessionFocusAreaStepComponent } from './components/session-focus-area-step/session-focus-area-step.component';
import { OnlinePresenceStepComponent } from './components/online-presence-step/online-presence-step.component';
import { SharedModule } from '../../shared/shared.module';
import { OnboardingSharedModule } from '../shared/onboarding-shared.module';
import { PartnerUpComponent } from './containers/partner-up/partner-up.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';

@NgModule({
  declarations: [
    OnboardingStepperComponent,
    PersonalInfoStepComponent,
    WhyJoieStepComponent,
    TeachingExperienceStepComponent,
    SessionFocusAreaStepComponent,
    OnlinePresenceStepComponent,
    PartnerUpComponent,
  ],
  imports: [
    OnboardingTeacherRoutingModule,
    SharedModule,
    OnboardingSharedModule,
    IvyCarouselModule,
    NgxMatIntlTelInputModule,
  ],
})
export class OnboardingTeacherModule {}
