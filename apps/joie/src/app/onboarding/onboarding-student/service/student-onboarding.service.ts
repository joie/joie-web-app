import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class StudentOnboardingService {
  constructor() {}

  addCheckboxes(keys, formArray, dataEnum, values) {
    if (values && values.length > 0) {
      keys.forEach((key) => formArray.push(new FormControl(values.includes(dataEnum[key]))));
    } else {
      keys.forEach(() => formArray.push(new FormControl(false)));
    }
    console.log(formArray);
  }
}
