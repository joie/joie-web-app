import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info-step',
  templateUrl: './personal-info-step.component.html',
  styleUrls: ['./personal-info-step.component.scss'],
})
export class PersonalInfoStepComponent implements OnInit {
  @Output() stepComplete = new EventEmitter(); //todo  type as step1 form data model interface

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  collectPersonalInfo(stepData) {
    this.stepComplete.next(stepData);
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      phoneNumberCtrl: ['', Validators.required],
    });
  }
}
