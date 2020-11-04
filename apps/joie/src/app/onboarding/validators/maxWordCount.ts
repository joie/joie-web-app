import { ValidatorFn, FormControl } from '@angular/forms';

export function wordLimitValidator(wordCountLimit = 10): ValidatorFn {
  return function validate(textarea: FormControl) {
    const inputWords = textarea.value.split(' ');

    if (inputWords.length > wordCountLimit) {
      return {
        exceedesWordLimit: true,
        limit: wordCountLimit,
        actualWordsCount: inputWords.length,
      };
    }

    return null;
  };
}
