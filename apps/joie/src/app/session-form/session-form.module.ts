import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { SessionFormComponent } from './components/session-form/session-form.component';
import { RouterModule } from '@angular/router';
import { SessionFormMetadataComponent } from './components/session-form-metadata/session-form-metadata.component';
import { SessionFormService } from './services/session-form.service';
import { SessionFormTimeSlotsComponent } from './components/session-form-time-slots/session-form-time-slots.component';
import { MatNativeDateModule } from '@angular/material/core';
import { SessionFormAttributesComponent } from './components/session-form-attributes/session-form-attributes.component';
import { FormArrayTableComponent } from './components/form-array-table/form-array-table.component';

@NgModule({
  declarations: [SessionFormComponent, SessionFormMetadataComponent, SessionFormTimeSlotsComponent, SessionFormAttributesComponent, FormArrayTableComponent],
  imports: [
    SharedModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  exports: [SessionFormComponent],
  providers: [SessionFormService],
})
export class SessionFormModule {}
