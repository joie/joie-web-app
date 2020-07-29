import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teaching-experience-step',
  templateUrl: './teaching-experience-step.component.html',
  styleUrls: ['./teaching-experience-step.component.scss'],
})
export class TeachingExperienceStepComponent implements OnInit {
  teachersName;
  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute
  ) {
    this.formGroup = this._formBuilder.group({
      teachingExpCtrl: [
        '',
        [
          Validators.required,
          Validators.minLength(50),
          Validators.maxLength(300),
        ],
      ],
    });
  }

  ngOnInit() {
    let teacherData = history.state.teacherData;
    this.teachersName = teacherData.firstNameCtrl;
    if ('teachingExpCtrl' in history.state.teacherData) {
      this.initFormWithCachedData(teacherData);
    }
  }

  private initFormWithCachedData(teacherData) {
    this.formGroup.controls['teachingExpCtrl'].setValue(
      teacherData.teachingExpCtrl
    );
  }
}
