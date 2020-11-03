import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable, of, from } from 'rxjs';
import { __, split, modulo, pipe, length, equals } from 'ramda';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  // private itemDoc: AngularFirestoreDocument<Item>;
  // item: Observable<Item>;
  constructor(private afs: AngularFirestore) {
    // this.itemDoc = afs.doc<Item>('items/1');
    // this.item = this.itemDoc.valueChanges();
  }
  // update(item: Item) {
  //   this.itemDoc.update(item);
  // }
  get isCollection(): (path: string) => boolean {
    // ! throw error if empty string
    const isOdd = modulo(__, 2);
    return pipe(split('/'), length, isOdd, equals(0));
  }

  get$<T>(path: string, queryFn?: QueryFn): Observable<T> | Observable<T[]> {
    return (this.isCollection(path)
      ? this.afs.doc<T>(path)
      : this.afs.collection<T>(path, queryFn)
    ).valueChanges({ idField: 'id' });
    // return this.afs.doc<T>(path).valueChanges();
    // return this.afs.collection<T>(path).valueChanges();
  }

  getSessionsData(path: string, queryFn?: QueryFn) {
    return this.afs.collection(path, queryFn => queryFn
      .orderBy('description', 'desc')
      .limit(5)
    ).valueChanges({ idField: 'id' });
  }

  getSessionsNext(path: string, startAfter, queryFn?: QueryFn) {
    return this.afs.collection(path, queryFn => queryFn
      .limit(5)
      .orderBy('description', 'desc')
      .startAfter(startAfter)
    ).valueChanges({ idField: 'id' });
  }

  getSessionsPrev(path: string, prevStartAt, firstInResponse, queryFn?: QueryFn) {
    return this.afs.collection(path, queryFn => queryFn
      .orderBy('description', 'desc')
      .startAt(prevStartAt)
      .endBefore(firstInResponse)
      .limit(5)
    ).valueChanges({ idField: 'id' });
  }

  set$<T>(path: any, data: T) {
    return from(
      this.isCollection(path)
        ? this.afs.doc<T>(path).set(data, { merge: true })
        : this.afs.collection<T>(path).add(data)
    );
  }
}
