import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    let teacher = history.state.teacher || null;
    if (teacher && 'firstNameCtrl' in teacher) {
      this.initFormWithCachedData(teacher);
    }
  }

  private initFormWithCachedData(teacher) {
    this.formGroup.controls['firstNameCtrl'].setValue(teacher.firstNameCtrl);
    this.formGroup.controls['lastNameCtrl'].setValue(teacher.lastNameCtrl);
    this.formGroup.controls['emailCtrl'].setValue(teacher.emailCtrl);
    this.formGroup.controls['phoneNumberCtrl'].setValue(
      teacher.phoneNumberCtrl
    );
  }
}
