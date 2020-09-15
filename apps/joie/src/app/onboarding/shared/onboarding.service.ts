import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  constructor() {}

  showErrorMessage(formControl) {
    const errors = formControl.errors;

    const errorKeys = Object.keys(errors);
    switch (errorKeys[0]) {
      case 'required':
        return 'required';
      case 'email':
        return 'Please enter a valid email address.';
      case 'minlength':
        return `Should be longer than ${
          errors[errorKeys[0]].requiredLength
        } symbols. Actual length ${errors[errorKeys[0]].actualLength}`;
      case 'maxlength':
        return `Should be less than ${errors[errorKeys[0]].requiredLength}`;

      case 'pattern':
        return 'Field is not valid';
      default:
        return 'Field is not valid TODO';
    }
  }

  addCheckboxes(keys, formArray) {
    keys.forEach(() => formArray.push(new FormControl(false)));
  }
}
