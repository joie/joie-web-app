import { ValidatorFn, FormControl } from '@angular/forms';

export function validUrl(): ValidatorFn {
  return function validate(inputfield: FormControl) {
    const inputUrl = inputfield.value;
    try {
      // tslint:disable-next-line: no-unused-expression
      new URL(inputUrl);
      return null;
    } catch (e) {
      return {
        invalidUrl: true,
      };
    }
  };
}
