import { take } from 'rxjs/operators';
import { ToggleBlock } from '../../models/toggle.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { mapValues } from 'lodash';
import { NotificationsApiService } from './notifications-api.service';
import { TeacherFacadeService } from '../service/teacher-facade.service';

@Component({
  selector: 'joie-teacher-notifications',
  templateUrl: './teacher-notifications.component.html',
  styleUrls: ['./teacher-notifications.component.scss'],
})
export class TeacherNotificationsComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  toggleBlocks: ToggleBlock[] = [
    {
      title: 'Session reminders',
      allChecked: true,
      toggles: [
        { name: 'Email', isChecked: false },
        { name: 'Push notification', isChecked: false },
      ],
    },
    {
      title: 'Account activity',
      allChecked: false,
      toggles: [
        { name: 'New registration', isChecked: false },
        { name: 'New follow', isChecked: false },
      ],
    },
    {
      title: 'Newsletter and promotions',
      allChecked: false,
      toggles: [
        { name: 'Weekly Newsletter', isChecked: false },
        { name: 'Free sessions, promos, events', isChecked: false },
      ],
    },
  ];

  constructor(
    private fb: FormBuilder,
    private teacherFacadeService: TeacherFacadeService
  ) {
    // todo this is the interface of the form.value. it's also an easier way to build the form, shall i use it instead ? or fetch one structure and submit another?
    // this structure is easy to access by keys, but idk how to interface it
    // this.formGroup = fb.group({
    //   settings: {
    //     session_reminders: {
    //       all: true,
    //       email: true,
    //       push_notification: true,
    //     },
    //     account_activity: {
    //       all: false,
    //       new_registration: false,
    //       new_follow: false,
    //     },
    //     newsletter_and_promotions: {
    //       all: false,
    //       weekly_newsletter: false,
    //       'free_sessions promos, events': false,
    //     },
    //   },
    //   });

    this.formGroup = this.fb.group({ settings: new FormGroup({}) });
    let settingFormGroup = this.fb.group({});
    this.toggleBlocks.forEach((block) => {
      let blockFormGroup = new FormGroup({});
      blockFormGroup.addControl('all', new FormControl(block.allChecked));

      block.toggles.forEach((toggle) => {
        blockFormGroup.addControl(
          this.convertToKey(toggle.name),
          new FormControl(block.allChecked ? true : toggle.isChecked)
        );
      });
      settingFormGroup.setControl(
        this.convertToKey(block.title),
        blockFormGroup
      );
    });
    this.formGroup.setControl('settings', settingFormGroup);
    // todo maybe rm tis setting control? if the final data flow decision would be to submit from here - better add the settings key in another way
  }
  ngOnInit(): void {
    this.teacherFacadeService
      .getNotificationSettings('user123')
      .pipe(take(1))
      .subscribe((settings) => (this.toggleBlocks = settings));
  }

  ngOnDestroy(): void {
    // todo
    // this.teacherFacadeService.submitNotificationSettings(
    //   '123',
    //   this.formGroup.value
    // );
  }

  convertToKey = (title) =>
    title.toLowerCase().replace(' ', '_').replace(',', '');

  toggleBlock(block) {
    let prevVal = this.formGroup.value['settings'][block];
    this.formGroup.controls;
    this.formGroup
      .get(['settings', block])
      .setValue(mapValues(prevVal, (val) => !val));
  }

  toggleSlider(blockKey, toggleKey) {
    let prevVal = this.formGroup.value['settings'][blockKey][toggleKey];
    this.formGroup.get(['settings', blockKey]).patchValue({
      [toggleKey]: !prevVal,
    });
  }
}
