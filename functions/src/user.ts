import * as functions from 'firebase-functions';
// import { sgMail, msg } from './email';
import { db } from './config';

export const USERS = 'users';

// type Role = 'subscriber' | 'admin';
// interface User {
//   readonly uid: functions.auth.UserRecord['uid'];
//   // displayName: string | null;
//   // photoURL: string | null;
//   // email: string;
//   // joined: number;
//   // roles: Role[];
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createUserDocumentInFirestore(uid: string): Promise<any> {
  const ref = db.collection(USERS).doc(uid);
  const userPayload = {
    uid,
    joined: new Date(),
  };
  await ref.set(userPayload, { merge: true });
}

export const newUserSetup = functions.auth.user().onCreate(async (user) => {
  await createUserDocumentInFirestore(user.uid);

  //     // const body = 'Welcome to Fireship.io!';
  //     // const subject = 'Welcome aboard!';

  //     // const emailMsg = msg([email], { body, subject });

  //     // return await sgMail.send(emailMsg);
});

// When a user deletes their account, clean up after them
export const cleanupUser = functions.auth.user().onDelete(async (user) => {
  return db.collection(USERS).doc(user.uid).delete();
});
