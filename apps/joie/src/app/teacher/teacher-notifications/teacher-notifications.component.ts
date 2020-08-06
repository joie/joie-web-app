import { ToggleBlock } from '../../models/toggle.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnDestroy } from '@angular/core';
import { mapValues } from 'lodash';

@Component({
  selector: 'joie-teacher-notifications',
  templateUrl: './teacher-notifications.component.html',
  styleUrls: ['./teacher-notifications.component.scss'],
})
export class TeacherNotificationsComponent implements OnDestroy {
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

  constructor(private fb: FormBuilder) {
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
  }

  ngOnDestroy(): void {
    // todo apiService.submitSettings()
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
