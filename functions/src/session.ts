import * as functions from 'firebase-functions';
import { getUID, catchErrors } from './helpers';
import { db } from './config';
import * as admin from 'firebase-admin';

const SESSIONS = 'sessions';

/**
 *  Use this function to read the user document from Firestore
 */
export const getUser = async (uid: string) => {
  return await db
    .collection('users')
    .doc(uid)
    .get()
    .then((doc) => doc.data());
};

/**
 * Set customer id reference to a Firebase user non-destructively
 */
const setUserCustomerReference = (uid: string, customer_id: string) =>
  db.collection(STRIPE_CUSTOMERS).doc(uid).set({ customer_id }, { merge: true });

export const newSessionSetup = functions.firestore
  .document(`/${SESSIONS}/{sessionId}`)
  .onCreate((snap, context) => {
    const uid = getUID(context);

    if (!token.teacher) {
      throw new functions.https.HttpsError('permission-denied', 'teacher claim missing');
    }

    return snap.ref
      .update({
        owner: {
          uid,
          // ...(displayName && { displayName }),
          // ...(photoURL && { photoURL }),
        },
      })
      .catch((e) => console.log(e));
  });
