import {
  SessionType,
  CourseType,
  CourseLevel,
  Pillar,
  Activities,
} from './../../../../sessions/models/session';
import { CANCEL, SUBMIT } from '../../teacher-sessions.component';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router, ActivatedRoute } from '@angular/router';
import { SAVE_DRAFT } from '../../teacher-sessions.component';

@Component({
  selector: 'app-new-session-form',
  templateUrl: './new-session-form.component.html',
  styleUrls: ['./new-session-form.component.scss'],
})
export class NewSessionFormComponent {
  formGroup: FormGroup;

  // form spec
  sessionFormatOptions = Object.values(CourseType);
  sessionTypeOptions = Object.keys(SessionType);

  sessionPillars = Object.values(Pillar);
  sessionLevels = Object.values(CourseLevel);
  sessionActivities = Object.values(Activities);
  public availableTimeSlots: FormArray;
  public relatedSessions: FormArray;
  public goals: FormArray;
  public comments: FormArray;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      format: this.sessionFormatOptions[0],
      type: this.sessionTypeOptions[0],
      pillar: ['', Validators.required],
      level: ['', Validators.required],
      activity: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      goals: this.formBuilder.array([this.createGoal()]),
      comments: this.formBuilder.array([this.createComment()]),
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      maxStudents: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.max(10),
        ],
      ],
      dateTimeDuration: this.formBuilder.group({
        date: '',
        time: '',
        duration: '',
      }),
      availableTimeSlots: this.formBuilder.array([this.createTimeSlot()]),
      promo: '',
      relatedSessions: this.formBuilder.array([this.createUrlInput()]),
    });
  }

  restoreFormValue(formData) {
    this.formGroup.patchValue(formData);
  }

  get goalControls() {
    return this.formGroup.controls['goals']['controls'];
  }

  addGoal() {
    this.goals = this.formGroup.get('goals') as FormArray;
    this.goals.push(this.createGoal());
  }

  removeGoal(i: number) {
    this.goals.removeAt(i);
  }

  createGoal() {
    return this.formBuilder.control('');
  }

  get commentControls() {
    return this.formGroup.controls['comments']['controls'];
  }

  addComment() {
    this.comments = this.formGroup.get('comments') as FormArray;
    this.comments.push(this.createComment());
  }

  removeComment(i: number) {
    this.comments.removeAt(i);
  }

  createComment() {
    return this.formBuilder.control('');
  }

  get slotControls() {
    return this.formGroup.controls['availableTimeSlots']['controls'];
  }

  addTimeSlot() {
    this.availableTimeSlots = this.formGroup.get(
      'availableTimeSlots'
    ) as FormArray;
    this.availableTimeSlots.push(this.createTimeSlot());
  }

  removeTimeSlot(i: number) {
    this.availableTimeSlots.removeAt(i);
  }

  createTimeSlot() {
    return this.formBuilder.group({
      date: '',
      time: '',
      duration: '',
    });
  }

  get relatedSessionControl() {
    return this.formGroup.controls['relatedSessions']['controls'];
  }

  addRelatedSession() {
    this.relatedSessions = this.formGroup.get('relatedSessions') as FormArray;
    this.relatedSessions.push(this.createUrlInput());
  }

  removeRelatedSession(i: number) {
    this.relatedSessionControl.removeAt(i);
  }

  createUrlInput() {
    return this.formBuilder.control('');
  }
  cancelAdding() {
    this.router.navigate(['list'], {
      relativeTo: this.route.parent,
      state: { operation: CANCEL },
    });
  }
  saveFormDraft() {
    this.router.navigate(['list'], {
      relativeTo: this.route.parent,
      state: { operation: SAVE_DRAFT },
    });
  }
  submitSession() {
    this.router.navigate(['list'], {
      relativeTo: this.route.parent,
      state: { operation: SUBMIT },
    });
  }
}
