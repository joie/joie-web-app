import { Injectable } from '@angular/core';
import 'firebase/firestore';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable, of, from } from 'rxjs';
import { __, split, modulo, pipe, length, equals } from 'ramda';

@Injectable({
  providedIn: 'root'
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

  get<T>(path: string) {
    return (this.isCollection(path)
      ? this.afs.doc<T>(path)
      : this.afs.collection<T>(path)
    ).valueChanges();
  }

  set<T>(path: string, data: T) {
    return from(
      this.isCollection(path)
        ? this.afs.doc<T>(path).set(data)
        : this.afs.collection<T>(path).add(data)
    );
  }
}
