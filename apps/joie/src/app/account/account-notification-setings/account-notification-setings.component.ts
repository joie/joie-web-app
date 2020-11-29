import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../account.service';
import { SessionReminders, ActivityReminders, NewsletterAndPromos } from '../../../../../../libs/schemes/src';

export const SESSION_REMINDERS = 'sessionReminders';
export const ACCOUNT_ACTIVITY = 'accountActivity';
export const NEWSLETTER_AND_PROMOS = 'newsletterAndPromos';
@Component({
  selector: 'app-account-notification-setings',
  templateUrl: './account-notification-setings.component.html',
  styleUrls: ['./account-notification-setings.component.scss'],
})
export class AccountNotificationSetingsComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  settingBlocks;
  remindersEnum = SessionReminders;
  activityEnum = ActivityReminders;
  newsletterEnum = NewsletterAndPromos;
  REMINDERS = SESSION_REMINDERS;
  ACTIVITY = ACCOUNT_ACTIVITY;
  NEWSLETTER = NEWSLETTER_AND_PROMOS;
  settings = null;

  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.formGroup = fb.group({
      [this.REMINDERS]: new FormArray([]),
      [this.ACTIVITY]: new FormArray([]),
      [this.NEWSLETTER]: new FormArray([]),
    });

    this.accountService.getNotificationSettings('user123').subscribe((settings) => {
      if (settings) {
        this.settings = settings;
      }
    });
  }

  get remindersKeys() {
    return Object.keys(this.remindersEnum);
  }

  get remindersFormArray() {
    return this.formGroup.get(this.REMINDERS) as FormArray;
  }

  get activityKeys() {
    return Object.keys(this.activityEnum);
  }

  get activityFormArray() {
    return this.formGroup.get(this.ACTIVITY) as FormArray;
  }

  get newsletterKeys() {
    return Object.keys(this.newsletterEnum);
  }

  get newsletterFormArray() {
    return this.formGroup.get(this.NEWSLETTER) as FormArray;
  }

  ngOnInit(): void {
    this.addToggles();
  }

  ngOnDestroy(): void {
    this.submitSettings();
  }

  getValues(formArrayName, arrayEnum, keys) {
    return this.formGroup.value[formArrayName]
      .map((checked, i) => (checked ? arrayEnum[keys[i]] : null))
      .filter((v) => v !== null);
  }

  getControlValue(selectedValues, togglesEnum, key) {
    return selectedValues.includes(togglesEnum[key]);
  }

  addToggles() {
    this.remindersKeys.forEach((key) =>
      this.remindersFormArray.push(
        new FormControl(this.getControlValue(this.settings[this.REMINDERS], this.remindersEnum, key)),
      ),
    );

    this.activityKeys.forEach((key) =>
      this.activityFormArray.push(
        new FormControl(this.getControlValue(this.settings[this.ACTIVITY], this.activityEnum, key)),
      ),
    );

    this.newsletterKeys.forEach((key) =>
      this.newsletterFormArray.push(
        new FormControl(this.getControlValue(this.settings[this.NEWSLETTER], this.newsletterEnum, key)),
      ),
    );
  }

  handleBlockToggle(formArray: FormArray, keys, sliderToggle) {
    formArray.patchValue(keys.map(() => !sliderToggle._checked));
  }

  submitSettings() {
    const notificationSettings = {
      [this.REMINDERS]: this.getValues(this.REMINDERS, this.remindersEnum, this.remindersKeys),
      [this.ACTIVITY]: this.getValues(this.ACTIVITY, this.activityEnum, this.activityKeys),
      [this.NEWSLETTER]: this.getValues(this.NEWSLETTER, this.newsletterEnum, this.newsletterKeys),
    };
    console.log(notificationSettings);
  }
}
