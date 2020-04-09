import { customClaims } from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { map, tap, pluck } from 'rxjs/operators';

type Claim = 'admin' | 'author'; // etc'...

export const claimCheck = (claim: Claim, alternatePath = ['']) => () =>
  pipe(
    customClaims,
    pluck(claim),
    tap((hasClaim: boolean) => {
      !hasClaim && console.warn(`user must be ${claim}`);
    }),
    map((hasClaim) => hasClaim || alternatePath)
  );
// TODO add memoization with ramda
// !!NO! if user changes the memoization can return wrong result
