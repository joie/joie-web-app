import { numbersRegExPattern, lettersRegExPattern, urlRegExPattern } from './../../models/regex';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  constructor() {}

  showErrorMessage(formControl) {
    let errors = formControl.errors;

    let errorKeys = Object.keys(errors);
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
        return `The text entered exceeds the maximum length. ${
          errors[errorKeys[0]].requiredLength
        }`;

      case 'requireCheckboxToBeChecked':
        return 'At least one should be checked';
      case 'requireNotMoreThanOneCheckboxToBeChecked':
        return 'Not more than one should be checked';

      case 'pattern':
        const pattern = errors.pattern.requiredPattern;
        return this.getPatternErrorMessage(pattern);
      default:
        console.log(formControl);
        console.log(errors);

        return 'Field is not valid TODO';
    }
  }

  addCheckboxes(keys, formArray) {
    keys.forEach(() => formArray.push(new FormControl(false)));
  }

  getPatternErrorMessage(pattern) {
    switch (pattern) {
      case numbersRegExPattern:
        return 'Should only have numbers';
      case lettersRegExPattern:
        return 'Should only have letters';
      case urlRegExPattern:
        return 'Url is not valid';
      default:
        return 'dismatching pattern';
    }
  }
}
