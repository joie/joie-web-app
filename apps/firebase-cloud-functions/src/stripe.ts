import * as functions from 'firebase-functions';
import { db, stripe, API_URL } from './config';
import { getUID, catchErrors, serverTimestamp, getUEmail } from './helpers';
import { createUserDocumentInFirestore } from '.';
import { firestore } from 'firebase-admin';
import { getSession, setSessionUser } from './session';
import get from 'lodash.get';
import { IResponse, IStripe } from './../../../libs/schemes/src/lib/models';
import { Session } from './../../../libs/schemes/src/lib/session/models/session.model';

const STRIPE_PATH = 'stripe';
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
const getStripe = async (uid: string): Promise<IStripe | undefined> => {
  const stripeData = await db
    .collection(`users/${uid}/${STRIPE_PATH}`)
    .doc(uid)
    .get()
    .then((doc) => doc.data());
  return stripeData;
};

/**
 * Set customer id reference to a Firebase user non-destructively
 */
const setStripeReference = (uid: string, params: IStripe) =>
  db
    .collection(`users/${uid}/${STRIPE_PATH}`)
    .doc(uid)
    .set({ ...params }, { merge: true });

// const deleteUserCustomerReference = (uid: string) => db.collection(CUSTOMERS).doc(uid).delete();
/**
 *  Use this function to create a customer & source for non-existing customer
 */
const createStripeAndSource = async (source: string, uid: string) => {
  const user = await getUser(uid);

  if (!user) {
    throw new functions.https.HttpsError('not-found', `couldn't find user in firestore`);
  }

  const customer = await stripe.customers.create({
    email: user.email,
    metadata: { firebaseUID: uid },
    source,
  });

  await setStripeReference(uid, { customerId: customer.id });

  return customer;
};

/**
 *  Use this function to create a source for existing customer
 */
const createSource = async (source: string, customerId: string) =>
  await stripe.customers.createSource(customerId, { source });

export const stripeAttachSource = functions.https.onCall(async ({ sourceId }, context) => {
  const uid = getUID(context);

  if (!uid) {
    throw new functions.https.HttpsError('not-found', `couldn't find user`);
  }

  const stripeData = await getStripe(uid);

  if (stripeData && stripeData.customerId) {
    return catchErrors(createSource(sourceId, stripeData.customerId));
  }

  return catchErrors(createStripeAndSource(sourceId, uid));
});

/**
 * When a user deletes their account, clean up after them
 */
export const cleanupStripeCustomer = functions.auth.user().onDelete(async (user) => {
  const snapshot = await db.collection(`users/${user.uid}/${STRIPE_PATH}`).doc(user.uid).get();
  const stripeData = snapshot.data() as IStripe;

  // delete customer if exist in user
  if (stripeData) {
    if (stripeData.customerId) {
      stripe.customers.del(stripeData.customerId);
    }

    if (stripeData.accountId) {
      stripe.accounts.del(stripeData.accountId); // @TODO: consult with @yinon if we can do this
    }
    return 'finished';
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
      const uid = getUID(context) ?? '';
      const email = getUEmail(context);
      const { sessionId } = params;

      const senderStripeData = await getStripe(uid);

      if (!senderStripeData) {
        throw new Error(`Missing payment method for sender`);
      }

      let session = await getSession(sessionId) as Session;

      const { customerId: senderCustomerId } = senderStripeData;

      if (session) {
        // owner can not pay it's own session
        if (get(session, 'owner.uid', false) === uid) {
          throw new Error(`Owner cannot purchase it's own session`);
        }

        const amount = get(session, 'price.display', false);
        const currency = get(session, 'price.currency', false);

        if (!amount || !currency) {
          throw new Error('Amount or Currency missing in the session data');
        }

        session = Object.assign({ id: sessionId }, session);

        let stripeChargeId;
        let stripeTransferId;

        const receiverStripeData = await getStripe(session.owner.uid);

        if (!receiverStripeData) {
          throw new Error(`Missing payment method for receiver`);
        }

        const { accountId: receiverAccountId } = receiverStripeData;

        // @TODO: enforce firestore rules for this scenario
        // if (senderAccountId && receiverAccountId) {
        //   const response = await chargeTransferAccountToAccount(
        //     session,
        //     senderAccountId,
        //     receiverAccountId,
        //     email,
        //   );

        //   if (response && response.stripeChargeId && response.stripeTransferId) {
        //     stripeChargeId = response.stripeChargeId;
        //     stripeTransferId = response.stripeTransferId;
        //   } else {
        //     throw new Error(`Stripe - (chargeTransferAccountToAccount) Something went wrong while creating charge or tranfering, check Stripe logs`);
        //   }
        // }

        // @TODO: enforce firestore rules for this scenario
        if (!stripeChargeId && senderCustomerId && receiverAccountId) {
          const response = await chargeTransferCustomerToAccount(session, senderCustomerId, receiverAccountId, email);

          if (response && response.stripeChargeId && response.stripeTransferId) {
            stripeChargeId = response.stripeChargeId;
            stripeTransferId = response.stripeTransferId;
          } else {
            throw new Error(get(response, 'message', 'Error while processing the Payment'));
          }
        }

        if (stripeChargeId && stripeTransferId) {
          const sessionUserData = {
            sessionId,
            uid,
            stripeChargeId,
            stripeTransferId,
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

        throw new Error('Something went wrong');
      }
      throw new Error('Session not found');
    } catch (error) {
      return Promise.resolve({
        type: 'error',
        message: get(error, 'message', error),
      } as IResponse);
    }
  },
);
/**
 *  Use this function to get all sources for existing customer
 */
// const getSources = async (stripeId: string) => await stripe.customers.listSources(stripeId);
const getAccount = async (stripeId: string) => await stripe.accounts.retrieve(stripeId);

export const stripeGetSources = functions.https.onCall(async (_, context) => {
  const uid = getUID(context);

  if (!uid) {
    throw new functions.https.HttpsError('not-found', `couldn't find user`);
  }

  const stripeData = await getStripe(uid);

  if (!stripeData) {
    return catchErrors(Promise.resolve({}));
  }

  // until we support account -> account stripe payments don't remove this check
  if (stripeData.customerId) {
    return catchErrors(Promise.resolve({ data: true }));
  }

  return catchErrors(Promise.resolve({}));
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
  const { accountID: accountId } = params;
  const uid = getUID(context);

  if (!uid) {
    return catchErrors(Promise.resolve({ message: `No user found`, type: 'error' } as IResponse));
  }

  const accountResp = await getAccount(accountId);

  if (accountResp) {
    await setStripeReference(uid, { accountId });

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

// const chargeTransferAccountToAccount = async (
//   session: Session,
//   senderAccountId: string,
//   receiverAccountId: string,
//   email?: string,
// ): Promise<{ stripeChargeId: string; stripeTransferId: string } | undefined> => {
//   try {
//     let response;
//     let stripeChargeId;
//     let stripeTransferId;

//     // we charge first the sender
//     response = await stripe.charges.create(
//       {
//         amount: session.price.display * 100,
//         currency: session.price.currency,
//         application_fee_amount: 100, // @TODO: // we need to consult if we will charge fees & how much
//         source: 'tok_visa',
//         transfer_group: `SESSION_${session.id}_${email}`,
//         receipt_email: email,
//         metadata: {
//           title: get(session, 'title', ''),
//           session_id: session.id,
//         },
//         description: 'Initiated through Joie'
//       },
//       {
//         stripeAccount: senderAccountId,
//       },
//     );

//     stripeChargeId = response.id ?? null;

//     // then we transfer the funds
//     response = await stripe.transfers.create({
//       amount: session.price.display * 100,
//       currency: session.price.currency,
//       destination: receiverAccountId,
//       transfer_group: `SESSION_${session.id}_${email}`,
//       metadata: {
//         title: get(session, 'title', ''),
//         session_id: session.id,
//       },
//       description: 'Initiated through Joie'
//     });

//     stripeTransferId = response.id ?? null;

//     return { stripeChargeId, stripeTransferId };
//   } catch (error) {
//     console.log('error: ', error);
//     return undefined;
//   }
// };

const chargeTransferCustomerToAccount = async (
  session: Session,
  senderCustomerId: string,
  receiverAccountId: string,
  email?: string,
): Promise<{ stripeChargeId: string | null; stripeTransferId: string | null; message?: string } | undefined> => {
  try {
    let response;
    let stripeChargeId;
    let stripeTransferId;

    // we charge first the sender
    response = await stripe.charges.create(
      {
        customer: senderCustomerId,
        amount: session.price.display * 100,
        currency: session.price.currency,
        transfer_group: `SESSION_${session.id}_${email}`,
        receipt_email: email,
        metadata: {
          title: get(session, 'title', ''),
          session_id: session.id,
        },
        description: 'Initiated through Joie'
      }
    );
    stripeChargeId = response.id ?? null;

    // then we transfer the funds
    response = await stripe.transfers.create({
      amount: session.price.display * 100,
      currency: session.price.currency,
      destination: receiverAccountId,
      transfer_group: `SESSION_${session.id}_${email}`,
      metadata: {
        title: get(session, 'title', ''),
        session_id: session.id,
      },
      description: 'Initiated through Joie'
    });

    stripeTransferId = response.id ?? null;

    return { stripeChargeId, stripeTransferId };
  } catch (error) {
    console.log('error: ', error);
    return { stripeChargeId: null, stripeTransferId: null, message: error.message };
  }
};

// export const stripeDisonnectAccount = functions.https.onCall(async (_, context) => {
//   const uid = getUID(context);
//   if (!uid) {
//     throw new functions.https.HttpsError('not-found', `couldn't find user`);
//   }

//   const customer = await getUserCustomer(uid);

//   if (customer && customer.type === 'account') {
//     // disconnect account from stripe also
//     const deleted = await stripe.accounts.del(customer?.stripeId);

//     if (deleted) {
//       await deleteUserCustomerReference(uid);
//       return Promise.resolve({ message: 'Stripe account succesfully disconnected', type: 'success' } as IResponse);
//     }
//     return Promise.resolve({
//       message: `Stripe account failed to disconnect`,
//       type: 'error',
//       data: deleted,
//     } as IResponse);
//   }

//   return Promise.resolve({ message: `Stripe account failed to disconnect`, type: 'error' } as IResponse);
// });
