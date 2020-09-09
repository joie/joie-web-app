import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class StudentOnboardingService {
  constructor() {}

  addCheckboxes(keys, formArray) {
    keys.forEach(() => formArray.push(new FormControl(false)));
  }
}
