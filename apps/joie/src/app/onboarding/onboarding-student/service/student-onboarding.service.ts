import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class StudentOnboardingService {
  constructor() {}

  addCheckboxes(keys, formArray, dataEnum, values) {
    console.log(values);
    if (values && values.length > 0) {
      values.forEach((value) => formArray.push(value));
    } else {
      keys.forEach(() => formArray.push(new FormControl(false)));
    }
  }
}
