import * as functions from 'firebase-functions';
// import { sgMail, msg } from './email';
import { db } from './config';
import { auth } from 'firebase';

// type Role = 'subscriber' | 'admin';
interface User {
  readonly uid: functions.auth.UserRecord['uid'];
  // displayName: string | null;
  // photoURL: string | null;
  // email: string;
  joined: number;
  // roles: Role[];
}

export const newUserSetup = functions.auth
  .user()
  .onCreate(async (user, context) => {
    const ref = db.collection('users').doc(user.uid);
    const { uid /*, displayName, photoURL, email*/ } = user;
    const userPayload: User = {
      uid,
      // displayName,
      // photoURL,
      // email,
      joined: Date.now()
      // roles: ['subscriber']
    };
    await ref.set(userPayload);

    // const body = 'Welcome to Fireship.io!';
    // const subject = 'Welcome aboard!';

    // const emailMsg = msg([email], { body, subject });

    // return await sgMail.send(emailMsg);
  });
