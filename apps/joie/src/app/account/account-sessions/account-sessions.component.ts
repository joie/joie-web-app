import { Component, OnInit } from '@angular/core';
import { CollectionReference, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthFacade } from '../../auth/services/auth.facade';

@Component({
  selector: 'app-account-sessions',
  templateUrl: './account-sessions.component.html',
  styleUrls: ['./account-sessions.component.scss'],
})
export class AccountSessionsComponent implements OnInit {
  public boundQueryFn$: Observable<QueryFn>;

  constructor(private authFacade: AuthFacade) {}

  public ngOnInit() {
    this.boundQueryFn$ = this.authFacade.uid$.pipe(map((uid) => this.queryFnFactorial(uid)));
  }
  private queryFnFactorial(uid: string) {
    return (ref: CollectionReference) => ref.where('owner.uid', '==', uid);
  }
}
