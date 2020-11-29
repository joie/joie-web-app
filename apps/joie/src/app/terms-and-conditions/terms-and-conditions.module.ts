import { NgModule } from '@angular/core';

import { TermsAndConditionsRoutingModule } from './terms-and-conditions-routing.module';
import { TermsAndConditionsComponent } from './containers/terms-and-conditions/terms-and-conditions.component';

@NgModule({
  declarations: [TermsAndConditionsComponent],
  imports: [TermsAndConditionsRoutingModule],
})
export class TermsAndConditionsModule {}
