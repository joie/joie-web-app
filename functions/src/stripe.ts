import { IResponse } from './interfaces';
import * as functions from 'firebase-functions';
import { getUID, catchErrors, getUEmail, serverTimestamp } from './helpers';
import { db, stripe } from './config';
import { createUserDocumentInFirestore } from '.';
import { firestore } from 'firebase-admin';
import { getSession } from './session';
import get from 'lodash.get';

const CUSTOMERS = 'customers';

/**
 *  Use this function to read the user document from Firestore
 */
export const getUser = async (uid: string): Promise<firestore.DocumentData | undefined> => {
  const userDocumentPromise = db
    .collection('users')
    .doc(uid)
    .get()
    .then((doc) => doc.data());

  let userDocument = await userDocumentPromise;

  if (!userDocument) {
    await createUserDocumentInFirestore(uid);
    userDocument = await userDocumentPromise;
  }

  return userDocument;
};

/**
 *  Convenience method to get customer ID
 */
const getUserCustomerId = async (uid: string) => {
  const UserCustomer = await db
    .collection(CUSTOMERS)
    .doc(uid)
    .get()
    .then((doc) => doc.data());
  return UserCustomer?.stripeId;
};

/**
 * Set customer id reference to a Firebase user non-destructively
 */
const setUserCustomerReference = (uid: string, stripeId: string) =>
  db.collection(CUSTOMERS).doc(uid).set({ stripeId }, { merge: true });

/**
 *  Use this function to create a customer & source for non-existing customer
 */
const createCustomerAndSource = async (source: string, uid: string) => {
  const user = await getUser(uid);

  if (!user) {
    throw new functions.https.HttpsError('not-found', `couldn't find user in firestore`);
  }

  const customer = await stripe.customers.create({
    email: user.email,
    metadata: { firebaseUID: uid },
    source,
  });

  await setUserCustomerReference(uid, customer.id);

  return customer;
};

/**
 *  Use this function to create a source for existing customer
 */
const createSource = async (source: string, stripeId: string) =>
  await stripe.customers.createSource(stripeId, { source });

export const stripeAttachSource = functions.https.onCall(async ({ sourceId }, context) => {
  const uid = getUID(context);

  if (!uid) {
    throw new functions.https.HttpsError('not-found', `couldn't find user`);
  }

  const stripeId = await getUserCustomerId(uid);

  return stripeId ? catchErrors(createSource(sourceId, stripeId)) : catchErrors(createCustomerAndSource(sourceId, uid));
});

/**
 * When a user deletes their account, clean up after them
 */
export const cleanupStripeCustomer = functions.auth.user().onDelete(async (user) => {
  const snapshot = await db.collection(CUSTOMERS).doc(user.uid).get();
  const customer = snapshot.data();

  // delete customer if exist in user
  if (customer) {
    return stripe.customers.del(customer.stripeId);
  } else {
    return null;
  }
});

// call stripe attach source with source id
// get stripe_customer stripe id by firebase user uid
// if id exist create source
// otherwise create customer with source

// const customer = await stripe.customers.create({
//   email: 'paying.user@example.com',
//   source: 'src_18eYalAHEMiOZZp1l9ZTjSU0',
// });

// const customer = await stripe.customers.update('cus_AFGbOSiITuJVDs', {
//   default_source: 'src_18eYalAHEMiOZZp1l9ZTjSU0',
// });

// const charge = await stripe.charges.create({
//   amount: 1099,
//   currency: 'eur',
//   customer: 'cus_AFGbOSiITuJVDs',
//   source: 'src_18eYalAHEMiOZZp1l9ZTjSU0',
// });

export const stripeSessionCharge = functions.https.onCall(
  async (params, context): Promise<IResponse> => {
    try {
      const uid = getUID(context);
      const email = getUEmail(context);

      const { sessionId, sourceId } = params;

      const session = await getSession(sessionId);

      if (session) {
        // owner can not pay it's own session
        if (get(session, 'owner.uid', false) === uid) {
          return Promise.resolve({
            type: 'error',
            message: `Owner cannot purchase it's own session`,
          } as IResponse);
        }

        const amount = get(session, 'price.display', false);
        const currency = get(session, 'price.currency', false);

        if (!amount || !currency) {
          return Promise.resolve({
            type: 'error',
            message: 'Amount or Currency missing in the session data',
          } as IResponse);
        }

        const response = await stripe.charges.create({
          source: sourceId,
          amount: amount * 100,
          currency,
          receipt_email: email,
          description: `Joie - Session #${sessionId}`,
          metadata: {
            title: get(session, 'title', ''),
            session_id: sessionId,
          },
        });

        const { id } = response;

        const sessionUserData = {
          sessionId,
          uid,
          stripe_charge_id: id,
        };

        await db
          .collection(`/sessions_users`)
          .doc(`${sessionId}_${uid}`)
          .set(
            {
              ...sessionUserData,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            },
            { merge: true },
          )
          .catch((error) => {
            return Promise.resolve({
              type: 'error',
              message: error,
            } as IResponse);
          });

        return Promise.resolve({
          type: 'success',
          message: 'Session successfully paid',
        } as IResponse);
      }
      return Promise.resolve({
        type: 'error',
        message: `Session not found`,
      } as IResponse);
    } catch (error) {
      return Promise.resolve({
        type: 'error',
        message: error,
      } as IResponse);
    }
  },
);
/**
 *  Use this function to get all sources for existing customer
 */
const getSources = async (stripeId: string) => await stripe.customers.listSources(stripeId);

export const stripeGetSources = functions.https.onCall(async (_, context) => {
  const uid = getUID(context);

  if (!uid) {
    throw new functions.https.HttpsError('not-found', `couldn't find user`);
  }

  const stripeId = await getUserCustomerId(uid);

  if (!stripeId) {
    throw new functions.https.HttpsError('not-found', `couldn't find stripe customer in firestore`);
  }

  return catchErrors(getSources(stripeId));
});
