import { customClaims } from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

type Claim = 'admin' | 'author'; // etc'...
export const claimCheckMemoizedFactorial = (claim: Claim) => () =>
  pipe(
    customClaims,
    map(claims => claims[claim] === true)
  );
//! add memoization with ramda
