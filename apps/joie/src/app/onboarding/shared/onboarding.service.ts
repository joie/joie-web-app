import { Injectable } from '@angular/core';

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
        return 'The text entered exceeds the maximum length.';

      case 'pattern':
        return 'Field is not valid';
      default:
        return 'default  err msg';
    }
  }
}
