import { Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Post } from '../../../posts/models/post';
import { AuthFacade } from 'src/app/auth-state/+state/auth/facades/auth.facade';
import { Observable, Subject, of, throwError } from 'rxjs';
import { map, withLatestFrom, filter, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/auth-state/+state/auth/models/auth.models';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnDestroy {
  @Output() save = new EventEmitter<Post>();
  submit$: Subject<FormGroup> = new Subject();
  // uid$: Observable<User['uid']>;

  postForm = this.fb.group({
    // company: null,
    title: [null, Validators.required],
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

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {
    // Todo move this to container (parent component)
    const uid$: Observable<Pick<User, 'uid'>> = this.authFacade.user$.pipe(
      filter(Boolean),
      map(({ uid }) => ({ uid }))
    );

    this.submit$
      .pipe(
        tap(({ invalid }) => invalid && console.warn('form invalid')),
        filter(({ valid }) => valid),
        switchMap(({ valid, value }) =>
          valid ? of(value) : throwError('invalid form')
        ),
        withLatestFrom(uid$),
        map(([value, uid]) => ({ ...value, ...uid }))
      )
      .subscribe((value) => this.save.emit(value));
  }

  ngOnDestroy(): void {
    this.submit$.complete();
  }
}
