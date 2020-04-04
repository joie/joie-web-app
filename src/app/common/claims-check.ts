import { customClaims } from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

export const authorOnly = () =>
  pipe(
    customClaims,
    map(claims => claims.admin === true)
  );
