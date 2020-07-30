import { ValidatorFn, FormArray } from '@angular/forms';

export function atLeastOneIsCheckedValidator(minRequired = 1): ValidatorFn {
  return function validate(formGroup: FormArray) {
    let checked = 0;
    formGroup.controls.forEach((control) => {
      const isChecked = Object.values(control.value)[0];

      if (isChecked) {
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
