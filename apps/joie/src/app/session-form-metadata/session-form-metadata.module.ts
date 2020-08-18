import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { SessionFormMetadataComponent } from './components/session-form-metadata/session-form-metadata.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SessionFormMetadataComponent],
  imports: [
    SharedModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [SessionFormMetadataComponent],
})
export class SessionFormMetadataModule {}
