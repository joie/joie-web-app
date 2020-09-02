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
        return 'Email is not valid';
      case 'minlength':
        return `Should be longer than ${errors[errorKeys[0]].requiredLength} symbols`;
      case 'maxlength':
        return `Should be less than ${errors[errorKeys[0]].requiredLength} symbols`;

      case 'pattern':
        return 'Field is not valid';
      default:
        return 'default  err msg';
    }
  }
}
