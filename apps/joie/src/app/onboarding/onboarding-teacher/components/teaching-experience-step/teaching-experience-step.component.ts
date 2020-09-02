import { OnboardingService } from './../../../shared/onboarding.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export const TEACHING_EXPERIENCE = 'teachingExpCtrl';
@Component({
  selector: 'app-teaching-experience-step',
  templateUrl: './teaching-experience-step.component.html',
  styleUrls: ['./teaching-experience-step.component.scss'],
})
export class TeachingExperienceStepComponent implements OnInit {
  teachersName;
  formGroup: FormGroup;

  get teachingExp() {
    return this.formGroup.get(TEACHING_EXPERIENCE);
  }

  constructor(
    private _formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public onboardingService: OnboardingService
  ) {
    this.formGroup = this._formBuilder.group({
      teachingExpCtrl: [
        '',
        [Validators.required, Validators.minLength(50), Validators.maxLength(300)],
      ],
    });
  }

  ngOnInit() {
    let teacher = history.state.teacher;
    this.teachersName = teacher.firstNameCtrl;
    if ('teachingExpCtrl' in history.state.teacher) {
      this.initFormWithCachedData(teacher);
    }
  }

  private initFormWithCachedData(teacher) {
    this.formGroup.controls['teachingExpCtrl'].setValue(teacher.teachingExpCtrl);
  }
}
