import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { catchErrors, getUID } from './helpers';
import { db } from './config';

const SESSIONS = 'sessions';

export const sessionCreate = functions.firestore.document(`/${SESSIONS}/{sessionId}`).onCreate(async (snapshot) => {
  const now = admin.firestore.FieldValue.serverTimestamp();
  return snapshot.ref.set({ createdAt: now }, { merge: true }).catch((e) => console.log(e));
});

export const sessionDelete = functions.firestore.document(`/${SESSIONS}/{sessionId}`).onDelete((snap) => {
  const { thumbRef } = snap.data();

  if (thumbRef) {
    const bucket = admin.storage().bucket();
    const folderPath = thumbRef.substring(0, thumbRef.lastIndexOf('/'));
    return bucket.deleteFiles({ prefix: folderPath });
  } else {
    return null;
  }
});

export const deleteSession = functions.https.onCall(async (params, context) => {
  const { id } = params;
  const uid = getUID(context);

  const session = await db
    .collection(SESSIONS)
    .doc(id)
    .get()
    .then((doc) => doc.data());

  // @TODO: before deleting a session, check for permission

  // check if the user is the owner of this session
  if (session && session.owner.uid === uid) {
    await db
      .collection(SESSIONS)
      .doc(id)
      .delete()
      .catch((error) => {
        return catchErrors(
          Promise.resolve({
            message: error,
            type: 'error',
          }),
        );
      });

    return catchErrors(
      Promise.resolve({
        message: 'Session succesfully deleted!',
        type: 'success',
      }),
    );
  }

  return catchErrors(
    Promise.resolve({
      message: 'Failed deleting session, due to missing permission',
      type: 'error',
    }),
  );
});

// import { getUID, catchErrors } from './helpers';
// import * as admin from 'firebase-admin';

// /**
//  *  Use this function to read the user document from Firestore
//  */
// export const getUser = async (uid: string) => {
//   return await db
//     .collection('users')
//     .doc(uid)
//     .get()
//     .then((doc) => doc.data());
// };

// /**
//  * Set customer id reference to a Firebase user non-destructively
//  */
// const setUserCustomerReference = (uid: string, customer_id: string) =>
//   db.collection(STRIPE_CUSTOMERS).doc(uid).set({ customer_id }, { merge: true });

// export const newSessionSetup = functions.firestore
//   .document(`/${SESSIONS}/{sessionId}`)
//   .onCreate((snap, context) => {
//     const uid = getUID(context);

//     if (!token.teacher) {
//       throw new functions.https.HttpsError('permission-denied', 'teacher claim missing');
//     }

//     return snap.ref
//       .update({
//         owner: {
//           uid,
//           // ...(displayName && { displayName }),
//           // ...(photoURL && { photoURL }),
//         },
//       })
//       .catch((e) => console.log(e));
//   });

// export const storeThumbnailRef = functions.storage.object().onFinalize(async (object) => {
//   const fileBucket = object.bucket; // The Storage bucket that contains the file.
//   const filePath = object.name; // File path in the bucket.
//   const contentType = object.contentType; // File content type.
//   const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.

//   if (!contentType?.startsWith('image/')) {
//     throw new functions.https.HttpsError('failed-precondition', 'This is not an image.');
//   }

//   if (!filePath) {
//     throw new functions.https.HttpsError('failed-precondition', 'No filename found');
//   }

//   const start = filePath.lastIndexOf('/', 2);
//   const end = filePath.lastIndexOf('/');
//   const sessionId = filePath.substring(0, end).substring(start + 1);

// });
