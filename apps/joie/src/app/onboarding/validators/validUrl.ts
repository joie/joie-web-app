import { ValidatorFn, FormControl } from '@angular/forms';

export function validUrl(): ValidatorFn {
  return function validate(inputfield: FormControl) {
    let inputUrl = inputfield.value;
    try {
        new URL(inputUrl);
        return null;
    }
    catch (e) {
        return {
            invalidUrl: true
        };
    }
  };
}
