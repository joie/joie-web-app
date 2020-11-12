import * as functions from 'firebase-functions';
import { getUID, catchErrors } from './helpers';
import { db, stripe } from './config';
import { createUserDocumentInFirestore } from '.';
import { firestore } from 'firebase-admin';

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

export const stripeOnboard = functions.https.onCall(async (params, context) => {
  // const uid = getUID(context);
  try {
    const account = await stripe.accounts.create({ type: 'express' });

    const origin = `http://localhost:5001/joie-app/us-central1`; // @TODO: move this to runtimeConfig
    const accountLinkURL = await generateAccountLink(account.id, origin);

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
  // const uid = getUID(context);

  if (!params || !params.accountID) {
    return 'error';
  }

  try {
    const accountID = params.accountID;

    const origin = `http://localhost:5001/joie-app/us-central1`; // @TODO: move this to runtimeConfig
    const accountLinkURL = await generateAccountLink(accountID, origin);

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

export const stripeOnboardSuccess = functions.https.onRequest((req, res) => {
  console.log('req: ', req);
  console.log('res: ', res);
});

const generateAccountLink = (accountID: string, origin: string) => {
  return stripe.accountLinks
    .create({
      type: 'account_onboarding',
      account: accountID,
      refresh_url: `${origin}/stripeOnboardRefresh`,
      return_url: `${origin}/stripeOnboardSuccess`,
    })
    .then((link) => link.url);
};
