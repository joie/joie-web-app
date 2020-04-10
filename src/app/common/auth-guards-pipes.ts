import {
  hasCustomClaim,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

// import { customClaims } from '@angular/fire/auth-guard';
// import { pipe } from 'rxjs';
// import { map, tap, pluck } from 'rxjs/operators';

// type Claim = 'admin' | 'author'; // etc'...

// export const claimCheck = (claim: Claim, alternatePath = ['']) => () =>
//   pipe(
//     customClaims,
//     pluck(claim),
//     tap((hasClaim: boolean) => {
//       !hasClaim && console.warn(`user must be ${claim}`);
//     }),
//     map((hasClaim) => hasClaim || alternatePath)
//   );

export const adminOnly = () => hasCustomClaim('admin');
export const authorOnly = () => hasCustomClaim('author');
export const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['login']);
export const redirectLoggedInToItems = () => redirectLoggedInTo(['items']);
export const belongsToAccount = (next) =>
  hasCustomClaim(`account-${next.params.id}`);
