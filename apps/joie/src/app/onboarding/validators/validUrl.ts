import { ValidatorFn, FormControl } from '@angular/forms';

export function validUrl(): ValidatorFn {
  return function validate(inputfield: FormControl) {
    const inputUrl = inputfield.value;
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      new URL(inputUrl);
      return null;
    } catch (e) {
      return {
        invalidUrl: true,
      };
    }
  };
}
