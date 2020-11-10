import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import * as AuthSelectors from '../../../auth-state/+state/auth/selectors/auth.selectors';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit, OnDestroy {
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
      takeUntil(this.unsubscribe$),
    ).subscribe((userData: any) => {
      this.uid = userData.uid;
      this.isTeacher = userData.isTeacher;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  openTeacherPage() {
    if (this.isTeacher) {
      this.router.navigate([`teacher/${this.uid}`], { relativeTo: this.activatedRoute });
    }
  }

}
