import { mapValues } from 'lodash';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-notification-setings',
  templateUrl: './account-notification-setings.component.html',
  styleUrls: ['./account-notification-setings.component.scss'],
})
export class AccountNotificationSetingsComponent implements OnInit {
  formGroup: FormGroup;
  settingBlocks;
  constructor(private fb: FormBuilder, private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService // todo need to refactor it to smth less disgusting
      .getNotificationSettings('user123')
      .pipe(take(1))
      .subscribe((settings) => {
        this.settingBlocks = settings;
        this.formGroup = this.fb.group({});
        this.settingBlocks.forEach((block) => {
          let blockFormGroup = new FormGroup({});
          blockFormGroup.addControl('all', new FormControl(block.allChecked));
          block.toggles.forEach((toggle) => {
            blockFormGroup.addControl(
              this.convertToKey(toggle.name),
              new FormControl(block.allChecked ? true : toggle.isChecked)
            );
          });
          this.formGroup.setControl(this.convertToKey(block.title), blockFormGroup);
        });
      });
  }

  convertToKey = (title) => title.toLowerCase().replace(' ', '_').replace(',', '');

  toggleBlock(block) {
    let prevVal = this.formGroup.value[block];

    this.formGroup.get([block]).setValue(mapValues(prevVal, (val) => !val)); // todo bug when toggling block
  }

  toggleSlider(blockKey, toggleKey) {
    let prevVal = this.formGroup.value[blockKey][toggleKey];
    this.formGroup.get([blockKey]).patchValue({
      [toggleKey]: !prevVal,
    });
  }
}
