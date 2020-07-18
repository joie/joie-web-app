import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, ORIGIN } from '@angular/fire/functions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { OnboardingStepperComponent } from './onboarding-stepper/onboarding-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatIconModule } from '@angular/material/icon';
import { PersonalInfoStepComponent } from './teacher-onboarding-steps/personal-info-step/personal-info-step.component';
import { WhyJoieStepComponent } from './teacher-onboarding-steps/why-joie-step/why-joie-step.component';
import { TeachingExperienceStepComponent } from './teacher-onboarding-steps/teaching-experience-step/teaching-experience-step.component';
import { SessionFocusAreaStepComponent } from './teacher-onboarding-steps/session-focus-area-step/session-focus-area-step.component';
import { OnlinePresenceStepComponent } from './teacher-onboarding-steps/online-presence-step/online-presence-step.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingStepperComponent,
    PersonalInfoStepComponent,
    WhyJoieStepComponent,
    TeachingExperienceStepComponent,
    SessionFocusAreaStepComponent,
    OnlinePresenceStepComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [
    //   {
    //     provide: SETTINGS,
    //     useValue: environment.production
    //       ? undefined
    //       : {
    //           host: 'localhost:8080',
    //           ssl: false,
    //         },
    //   },
    //   {
    //     provide: ORIGIN,
    //     useValue: environment.production ? undefined : 'http://localhost:5001',
    //   },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
