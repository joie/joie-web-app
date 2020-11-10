import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CollectionReference, QueryFn } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthFacade } from '../../../auth/services/auth.facade';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teacherForm = this.fb.group({
    format: [null],
    typeOfSession: [null],
    pillar: [null],
    activity: [null],
    level: [null],
    price: [null],
    date: [null],
  });

  boundQueryFn$: Observable<QueryFn>;
  teacherData$: Observable<any>;

  constructor(
    private authFacade: AuthFacade,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
  ) { }

  public ngOnInit() {
    this.boundQueryFn$ = this.authFacade.uid$.pipe(map((uid) => this.queryFnFactorial(uid)));
    this.teacherData$ = this.getTeacherData();
  }

  private queryFnFactorial(uid: string) {
    return (ref: CollectionReference) => ref.where('owner.uid', '==', uid);
  }

  private getTeacherData() {
    return this.afAuth.authState.pipe(map((user) => user));
  }

  onSubmit() {}

}
