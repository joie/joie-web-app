import { ValidatorFn, FormArray } from '@angular/forms';

export function atLeastOneIsCheckedValidator(minRequired = 1): ValidatorFn {
  return function validate(formArray: FormArray) {
    let checked = 0;

    Object.keys(formArray.controls).forEach((key) => {
      const control = formArray.controls[key];

      if (control.value) {
        checked++;
      }
    });

    if (checked < minRequired) {
      return {
        requireCheckboxToBeChecked: true,
      };
    }

    return null;
  };
}
