import { customClaims } from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

type Claim = 'admin' | 'author'; // etc'...

export const claimCheck = (claim: Claim, alternatePath = ['']) => () =>
  pipe(
    customClaims,
    tap(() => {
      console.warn(`user must be ${claim}`);
    }),
    map((claims) => claims[claim] === true || alternatePath)
  );
// TODO add memoization with ramda
// !!NO! if user changes the memoization can return wrong result
