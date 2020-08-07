import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) {}

  onSubmit(FormData) {
    console.log(FormData);
    this.contact.postMessage(FormData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      message: new FormControl('', [Validators.required]),
    });
  }
}
