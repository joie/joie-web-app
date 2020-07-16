import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info-step',
  templateUrl: './personal-info-step.component.html',
  styleUrls: ['./personal-info-step.component.scss'],
})
export class PersonalInfoStepComponent implements OnInit {
  formGroup: FormGroup;
  completed: true;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      phoneNumberCtrl: ['', Validators.required],
    });
  }
}
