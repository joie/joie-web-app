import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';

@Component({
  selector: 'app-personal-info-step',
  templateUrl: './personal-info-step.component.html',
  styleUrls: ['./personal-info-step.component.scss'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class PersonalInfoStepComponent implements OnInit {
  @Output() stepComplete = new EventEmitter(); //todo  type as step1 form data model interface

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      firstNameCtrl: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
        ],
      ],
      lastNameCtrl: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
        ],
      ],
      emailCtrl: ['', [Validators.required, Validators.email]],
      phoneNumberCtrl: [
        '',
        [
          Validators.required,
          Validators.min(3),
          Validators.min(7),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }

  collectPersonalInfo(stepData) {
    this.stepComplete.next(stepData);
  }

  ngOnInit() {}
}
