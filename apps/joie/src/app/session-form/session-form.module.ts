import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { RouterModule } from '@angular/router';
import { SessionFormMetadataComponent } from './components/session-form-metadata/session-form-metadata.component';
import { SessionFormDateTimeSlotsComponent } from './components/session-form-date-time-slots/session-form-date-time-slots.component';

import { MatNativeDateModule } from '@angular/material/core';
import { SessionFormAttributesComponent } from './components/session-form-attributes/session-form-attributes.component';
import { SessionFormMarketingComponent } from './components/session-form-marketing/session-form-marketing.component';
import { FormArrayTableComponent } from '../common/components/form-array-table/form-array-table.component';
import { SimpleFormInputComponent } from '../common/components/simple-form-input/simple-form-input.component';
import { RecurringDateTimePickerComponent } from '../common/components/recurring-date-time-picker/recurring-date-time-picker.component';

import { DynaFormModule } from '../../../../../libs/dyna-form';
import { SessionFormDateTimeComponent } from './components/session-form-date-time/session-form-date-time.component';
import { SessionFormComponent } from './containers/session-form/session-form.component';
import { KalturaPlayerModule } from '../kaltura-player/kaltura-player.module';
import { SessionFormRepetitionsComponent } from './components/session-form-repetitions/session-form-repetitions.component';
import { SessionFormDurationComponent } from './components/session-form-duration/session-form-duration.component';

@NgModule({
  declarations: [
    SessionFormComponent,
    SessionFormMetadataComponent,
    SessionFormDateTimeSlotsComponent,
    SessionFormAttributesComponent,
    SessionFormMarketingComponent,
    FormArrayTableComponent,
    SimpleFormInputComponent,
    RecurringDateTimePickerComponent,
    SessionFormDateTimeComponent,
    SessionFormRepetitionsComponent,
    SessionFormDurationComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    DynaFormModule,
    KalturaPlayerModule,
  ],
  exports: [SessionFormComponent],
})
export class SessionFormModule {}
