import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './containers/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactService } from './services/contact.service';


@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
