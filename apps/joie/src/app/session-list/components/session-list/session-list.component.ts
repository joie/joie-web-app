import { Component, OnInit } from '@angular/core';
import {
  CollectionReference,
  DocumentChangeAction,
  DocumentSnapshot,
  QueryDocumentSnapshot,
  QueryFn,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { Observable, ReplaySubject } from 'rxjs';

import { SessionsService } from '../../../services/sessions/sessions.service';
import { Session, Status } from '../../../../../../../libs/schemes/src';
import {
  distinctUntilChanged,
  exhaust,
  exhaustMap,
  map,
  pluck,
  shareReplay,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';

const queryFn$ = new ReplaySubject<QueryFn>(1);
@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {
  sessionsSnapshots$: Observable<QueryDocumentSnapshot<Session>[]>;
  pageSize = 2;
  field: keyof Pick<Session, 'createdAt'> = 'createdAt';

  constructor(private sessionsService: SessionsService) {
    this.sessionsSnapshots$ = queryFn$.pipe(
      distinctUntilChanged(),
      exhaustMap((queryFn) => this.sessionsService.getSessionsQuerySnapshots(queryFn).pipe(take(1))),
      // map((snap: QuerySnapshot<Session>) => snap.docs),
      pluck('docs'),
      shareReplay(1),
    );
  }

  private initListQuery() {
    queryFn$.next(
      (ref: CollectionReference): firebase.firestore.Query<firebase.firestore.DocumentData> =>
        ref.where('status', '==', Status.Public).orderBy(this.field).limit(this.pageSize),
    );
  }

  async nextPage(): Promise<void> {
    const docs = await this.sessionsSnapshots$.pipe(take(1)).toPromise();
    const last = docs[docs.length - 1];
    queryFn$.next(
      (ref: CollectionReference): firebase.firestore.Query<firebase.firestore.DocumentData> =>
        ref.where('status', '==', Status.Public).orderBy(this.field).startAfter(last).limit(this.pageSize),
    );
  }

  async prevPage(): Promise<void> {
    const [first] = await this.sessionsSnapshots$.pipe(take(1)).toPromise();
    queryFn$.next(
      (ref: CollectionReference): firebase.firestore.Query<firebase.firestore.DocumentData> =>
        ref.where('status', '==', Status.Public).orderBy(this.field).endBefore(first).limitToLast(this.pageSize),
    );
  }

  ngOnInit(): void {
    this.initListQuery();
  }
}
