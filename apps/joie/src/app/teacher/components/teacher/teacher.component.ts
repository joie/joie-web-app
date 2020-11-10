import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { CollectionReference, QueryFn } from '@angular/fire/firestore';
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

  constructor(private authFacade: AuthFacade, private fb: FormBuilder) { }

  public ngOnInit() {
    this.boundQueryFn$ = this.authFacade.uid$.pipe(map((uid) => this.queryFnFactorial(uid)));
  }

  private queryFnFactorial(uid: string) {
    return (ref: CollectionReference) => ref.where('owner.uid', '==', uid);
  }

  onSubmit() {}

}
