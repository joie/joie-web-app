import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData, DocumentSnapshot, QueryFn, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
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

  getQuerySnapshot$<T>(path: string, queryFn?: QueryFn): Observable<QuerySnapshot<T>> {
    return (this.isCollection(path)
      ? this.afs.doc<T>(path)
      : this.afs.collection<T>(path, queryFn)
    ).get() as Observable<QuerySnapshot<T>>;
  }

  get$<T>(path: string, queryFn?: QueryFn): Observable<T> | Observable<T[]> {
    return (this.isCollection(path) ? this.afs.doc<T>(path) : this.afs.collection<T>(path, queryFn)).valueChanges({
      idField: 'id',
    });
  }

  set$<T>(path: any, data: T) {
    return from(
      this.isCollection(path)
        ? this.afs.doc<T>(path).set(data, { merge: true })
        : this.afs.collection<T>(path).add(data),
    );
  }
}
