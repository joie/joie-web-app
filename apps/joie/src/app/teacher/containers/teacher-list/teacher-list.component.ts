import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, takeUntil } from 'rxjs/operators';
import { CollectionReference, QueryFn } from '@angular/fire/firestore';

import * as AuthSelectors from '../../../auth-state/+state/auth/selectors/auth.selectors';
import { Status } from '../../../sessions/enums';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit, OnDestroy {
  isTeacher = false;
  uid: string;

  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private store: Store<any>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.pipe(
      select(AuthSelectors.getAuthUser),
      filter(resp => !!resp),
      takeUntil(this.unsubscribe$),
    ).subscribe((userData: any) => {
      this.uid = userData.uid;
      this.isTeacher = userData.isTeacher;

      if (this.isTeacher) {
        this.router.navigate([`${this.uid}`], { relativeTo: this.activatedRoute });
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  queryFn(): QueryFn {
    return (ref: CollectionReference): firebase.firestore.Query<firebase.firestore.DocumentData> =>
      ref.where('status', '==', Status.Public).where('isTeacher', '==', true);
  }
}
