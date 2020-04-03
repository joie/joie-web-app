import * as functions from 'firebase-functions';
import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';

export const newPostSetup = functions.firestore
  .document('posts/{id}')
  .onCreate(async (snapshot: DocumentSnapshot, context) => {
    const data = snapshot.data();

    if (data && context.auth?.uid) {
      const { createTime: createdAt } = snapshot;
      return snapshot.ref
        .set({ createdAt }, { merge: true })
        .catch(e => console.log(e));
    } else {
      return null;
    }
  });
