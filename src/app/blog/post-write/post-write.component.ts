import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { Post } from '../models/post';
import { AuthFacade } from 'src/app/auth-state/+state/auth/facades/auth.facade';
import { Observable, Subject, of, throwError } from 'rxjs';
import { map, withLatestFrom, filter, switchMap } from 'rxjs/operators';
import { User } from 'src/app/auth-state/+state/auth/models/auth.models';

@Component({
  templateUrl: './post-write.component.html',
  styleUrls: ['./post-write.component.scss']
})
export class PostWriteComponent implements OnDestroy {
  submit$ = new Subject();
  // uid$: Observable<User['uid']>;

  postForm = this.fb.group({
    // company: null,
    title: [null, Validators.required]
    // lastName: [null, Validators.required],
    // address: [null, Validators.required],
    // address2: null,c
    // city: [null, Validators.required],
    // state: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
    // shipping: ['free', Validators.required]
  });

  // hasUnitNumber = false;

  constructor(
    private fb: FormBuilder,
    private db: DbService,
    private authFacade: AuthFacade
  ) {
    const uid$: Observable<Pick<User, 'uid'>> = this.authFacade.user$.pipe(
      filter(Boolean),
      map(({ uid }) => ({ uid }))
    );

    this.submit$
      .pipe(
        switchMap(({ valid, value }) =>
          valid ? of(value) : throwError('invalid form')
        ),
        withLatestFrom(uid$),
        map(([value, uid]) => ({ ...value, ...uid }))
      )
      .subscribe(this.save.bind(this));
  }

  ngOnDestroy(): void {
    this.submit$.complete();
  }

  save(post: Post) {
    this.db.set$<Post>('posts', post);
  }
}
