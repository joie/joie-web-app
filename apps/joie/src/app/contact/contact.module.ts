import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './containers/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactService } from './services/contact.service';
import { ContactMapComponent } from './components/contact-map/contact-map.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactMapComponent,
  ],
  imports: [SharedModule, ContactRoutingModule, GoogleMapsModule],
  providers: [ContactService],
})
export class ContactModule {}
