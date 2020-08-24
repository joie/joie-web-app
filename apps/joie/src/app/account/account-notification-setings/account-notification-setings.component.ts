import { mapValues } from 'lodash';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-account-notification-setings',
  templateUrl: './account-notification-setings.component.html',
  styleUrls: ['./account-notification-setings.component.scss'],
})
export class AccountNotificationSetingsComponent implements OnInit {
  formGroup: FormGroup;
  settingBlocks;
  constructor(private fb: FormBuilder, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService
      .getNotificationSettings('user123')
      .pipe(take(1))
      .subscribe((settings) => {
        this.settingBlocks = settings;
        this.formGroup = this.fb.group({
          settings: new FormGroup({}),
        });
        let settingFormGroup = this.fb.group({});
        this.settingBlocks.forEach((block) => {
          let blockFormGroup = new FormGroup({});
          blockFormGroup.addControl('all', new FormControl(block.allChecked));
          block.toggles.forEach((toggle) => {
            blockFormGroup.addControl(
              this.convertToKey(toggle.name),
              new FormControl(block.allChecked ? true : toggle.isChecked)
            );
          });
          settingFormGroup.setControl(this.convertToKey(block.title), blockFormGroup);
        });
        this.formGroup.setControl('settings', settingFormGroup);
        // todo maybe rm tis setting control? if the final data flow decision would be to submit from here - better add the settings key in another way
      });
  }

  convertToKey = (title) => title.toLowerCase().replace(' ', '_').replace(',', '');

  toggleBlock(block) {
    let prevVal = this.formGroup.value['settings'][block];
    this.formGroup.controls;
    this.formGroup.get(['settings', block]).setValue(mapValues(prevVal, (val) => !val));
  }

  toggleSlider(blockKey, toggleKey) {
    let prevVal = this.formGroup.value['settings'][blockKey][toggleKey];
    this.formGroup.get(['settings', blockKey]).patchValue({
      [toggleKey]: !prevVal,
    });
  }
}
