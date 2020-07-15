import * as functions from 'firebase-functions';
import { getUID, catchErrors } from './helpers';
import { db, stripe } from './config';

const STRIPE_CUSTOMERS = 'stripe_customers';

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
 *  Convenience method to get customer ID
 */
const getUserCustomerId = async (uid: string) => {
  const UserCustomer = await db
    .collection(STRIPE_CUSTOMERS)
    .doc(uid)
    .get()
    .then((doc) => doc.data());
  return UserCustomer?.customer_id;
};

/**
 * Set customer id reference to a Firebase user non-destructively
 */
const setUserCustomerReference = (uid: string, customer_id: string) =>
  db
    .collection(STRIPE_CUSTOMERS)
    .doc(uid)
    .set({ customer_id }, { merge: true });

/**
 *  Use this function to create a customer & source for non-existing customer
 */
const createCustomerAndSource = async (source: string, uid: string) => {
  const user = await getUser(uid);

  if (!user) {
    throw new functions.https.HttpsError(
      'not-found',
      "couldn't find user in firestore"
    );
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
const createSource = async (source: string, stripeCustomerId: string) =>
  await stripe.customers.createSource(stripeCustomerId, { source });

export const stripeAttachSource = functions.https.onCall(
  async ({ sourceId }, context) => {
    const uid = getUID(context);

    const stripeCustomerId = await getUserCustomerId(uid);

    return stripeCustomerId
      ? catchErrors(createSource(sourceId, stripeCustomerId))
      : catchErrors(createCustomerAndSource(sourceId, uid));
  }
);

/**
 * When a user deletes their account, clean up after them
 */
export const cleanupStripeCustomer = functions.auth
  .user()
  .onDelete(async (user) => {
    const snapshot = await db.collection(STRIPE_CUSTOMERS).doc(user.uid).get();
    const customer = snapshot.data();

    // delete customer if exist in user
    if (customer) {
      await stripe.customers.del(customer.customer_id);
    }

    return db.collection(STRIPE_CUSTOMERS).doc(user.uid).delete();
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
const getSources = async (stripeCustomerId: string) =>
  await stripe.customers.listSources(stripeCustomerId);

export const stripeGetSources = functions.https.onCall(
  async ({ sourceId }, context) => {
    const uid = getUID(context);

    const stripeCustomerId = await getUserCustomerId(uid);

    if (!stripeCustomerId) {
      throw new functions.https.HttpsError(
        'not-found',
        "couldn't find stripe customer in firestore"
      );
    }

    return catchErrors(getSources(stripeCustomerId));
  }
);
