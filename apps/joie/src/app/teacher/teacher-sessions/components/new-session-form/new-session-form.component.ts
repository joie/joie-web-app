import {
  SessionType,
  CourseType,
  CourseLevel,
  Pillar,
  Activities,
  Repeat,
} from './../../../../sessions/models/session';
import { CANCEL, SUBMIT } from '../../teacher-sessions.component';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router, ActivatedRoute } from '@angular/router';
import { SAVE_DRAFT } from '../../teacher-sessions.component';
import {
  KalturaClient,
  UploadTokenUploadAction,
  KalturaSessionType,
  SessionStartAction,
  UploadTokenAddAction,
  KalturaUploadToken,
  MediaAddAction,
  KalturaMediaType,
  KalturaMediaEntry,
} from 'kaltura-ngx-client';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-new-session-form',
  templateUrl: './new-session-form.component.html',
  styleUrls: ['./new-session-form.component.scss'],
})
export class NewSessionFormComponent implements OnInit {
  formGroup: FormGroup;

  // form spec
  sessionFormatOptions = Object.values(CourseType);
  sessionTypeOptions = Object.values(SessionType);
  repeatOptions = Object.values(Repeat);
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
    private route: ActivatedRoute,
    private kalturaClient: KalturaClient
  ) {
    this.formGroup = this.formBuilder.group({
      format: ['', Validators.required],
      type: ['', Validators.required],
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
      repeat: ['', Validators.required],
      availableTimeSlots: this.formBuilder.array([this.createTimeSlot()]),
      promo: '',
      relatedSessions: this.formBuilder.array([this.createUrlInput()]),
    });
  }

  ngOnInit(): void {
    console.log(this.formGroup);
  }

  restoreFormValue(formData) {
    this.formGroup.patchValue(formData);
  }

  fileUpload(fileInputEvent: any) {
    const fileData = fileInputEvent.target.files[0] as File;

    this.kalturaClient
      .request(
        new UploadTokenAddAction({ uploadToken: new KalturaUploadToken() })
      )
      .subscribe((uploadTokenReponse) => {
        this.kalturaClient
          .request(
            new UploadTokenUploadAction({
              uploadTokenId: uploadTokenReponse.id,
              fileData: fileInputEvent.target.files[0],
              resume: false,
              finalChunk: true,
              resumeAt: -1,
            })
          )
          .subscribe((result) => {
            // TODO - take values from the form
            const entry = new KalturaMediaEntry();
            entry.name = 'hardcoded-1';
            entry.mediaType = KalturaMediaType.video;
            entry.description = '';

            this.kalturaClient
              .request(new MediaAddAction({ entry }))
              .subscribe((result) => {
                // TODO - make entry to firebase, use downloadUrl,thumbnailUrl
              });
          });
      });
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
    if (this.formGroup.valid) {
      this.router.navigate(['list'], {
        relativeTo: this.route.parent,
        state: { operation: SUBMIT },
      });
    }
  }

  isLiveStreaming() {
    return this.formGroup.value.format === CourseType.LiveStreaming;
  }

  studentLimitForSessionType() {
    switch (this.formGroup.value.type) {
      default:
        return '10 students';
    } // todo add cases if other types also affect limit
  }
}
