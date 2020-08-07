import { Component, OnInit } from '@angular/core';
import { contactOptions } from './contact-options';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactOptions = contactOptions;

  constructor() {}

  ngOnInit(): void {}
}
