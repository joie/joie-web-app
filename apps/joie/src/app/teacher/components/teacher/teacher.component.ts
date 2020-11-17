import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CollectionReference, QueryFn, AngularFirestore } from '@angular/fire/firestore';

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
  teacherUid: string;
  teacherData: any;

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.teacherUid = this.route.snapshot.paramMap.get('id');
    this.getTeacherData();
  }

  private getTeacherData() {
    return this.afs.collection('sessions', (ref: CollectionReference) => ref.where('owner.uid', '==', this.teacherUid).orderBy('owner').limit(1)).valueChanges().subscribe(res => {
      this.teacherData = res[0];
    });
  }

  queryFn(): QueryFn {
    return (ref: CollectionReference) => ref.where('owner.uid', '==', this.teacherUid).orderBy('status');
  }

  onSubmit() {}

}
