import * as functions from 'firebase-functions';
import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';

export const newPostSetup = functions.firestore
  .document('posts/{id}')
  .onCreate((snap: DocumentSnapshot, context) => {
    const { createTime: created_at } = snap;
    const uid = context.auth?.uid;
    return snap.ref
      .set({ created_at, uid }, { merge: true })
      .catch(e => console.log(e));
  });
