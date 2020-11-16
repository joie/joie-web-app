import { IResponse } from './interfaces';
import * as functions from 'firebase-functions';
import { db, stripe, API_URL } from './config';
import { getUID, catchErrors, getUEmail, serverTimestamp } from './helpers';
import { createUserDocumentInFirestore } from '.';
import { firestore } from 'firebase-admin';
import { getSession, setSessionUser } from './session';
import get from 'lodash.get';

const CUSTOMERS = 'customers';
const RETURN_URL = functions.config().stripe.return_url;

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
const setUserCustomerReference = (uid: string, stripeId: string, type: 'account' | 'customer' = 'customer') =>
  db.collection(CUSTOMERS).doc(uid).set({ stripeId, type }, { merge: true });

const deleteUserCustomerReference = (uid: string) => db.collection(CUSTOMERS).doc(uid).delete();
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

export const createCharge = async (data: {
  customer: string;
  amount: number;
  currency: string;
  receipt_email: string;
  description: string;
  metadata: any;
}): Promise<{ id: string }> => {
  return await stripe.charges.create(data);
};

export const stripeSessionCharge = functions.https.onCall(
  async (params, context): Promise<IResponse> => {
    try {
      const uid = getUID(context);
      const email = getUEmail(context);
      const { sessionId } = params;

      const customerId = await getUserCustomerId(uid ?? '');

      if (!customerId) {
        return Promise.resolve({
          type: 'error',
          message: `Missing payment method`,
        } as IResponse);
      }

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

        const response = await createCharge({
          customer: customerId,
          amount: amount * 100,
          currency,
          receipt_email: email ?? '',
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

        await setSessionUser(`${sessionId}_${uid}`, {
          ...sessionUserData,
          updatedAt: serverTimestamp(),
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

export const stripeOnboard = functions.https.onCall(async () => {
  try {
    const account = await stripe.accounts.create({ type: 'express' });

    const accountLinkURL = await generateAccountLink(account.id);

    return catchErrors(
      Promise.resolve({
        type: 'success',
        data: { url: accountLinkURL },
      }),
    );
  } catch (err) {
    return catchErrors(
      Promise.resolve({
        type: 'error',
        message: err,
      }),
    );
  }
});

export const stripeOnboardRefresh = functions.https.onCall(async (params, context) => {
  if (!params || !params.accountID) {
    return catchErrors(
      Promise.resolve({
        type: 'error',
        message: 'Missing accoutID',
      }),
    );
  }

  try {
    const accountID = params.accountID;

    const accountLinkURL = await generateAccountLink(accountID);

    return catchErrors(
      Promise.resolve({
        type: 'success',
        data: { url: accountLinkURL },
      }),
    );
  } catch (err) {
    return catchErrors(
      Promise.resolve({
        type: 'error',
        message: err,
      }),
    );
  }
});

export const stripeOnboardCallback = functions.https.onCall(async (params, context) => {
  const { accountID } = params;
  const uid = getUID(context);

  const accountResp = await stripe.accounts.retrieve(accountID);

  if (uid && accountResp) {
    await setUserCustomerReference(uid, accountID, 'account');

    return catchErrors(
      Promise.resolve({ data: `Stripe account verified and succesfully stored`, type: 'success' } as IResponse),
    );
  }

  return catchErrors(Promise.resolve({ message: `Unable to verify the stripe account`, type: 'error' } as IResponse));
});

const generateAccountLink = (accountID: string) => {
  return stripe.accountLinks
    .create({
      type: 'account_onboarding',
      account: accountID,
      refresh_url: `${API_URL}/stripeOnboardRefresh`,
      return_url: `${RETURN_URL}?accountID=${accountID}`,
    })
    .then((link) => link.url);
};

export const stripeDisonnectAccount = functions.https.onCall(async (_, context) => {
  const uid = getUID(context);
  if (!uid) {
    throw new functions.https.HttpsError('not-found', `couldn't find user`);
  }

  return catchErrors(deleteUserCustomerReference(uid));
});
