import * as functions from 'firebase-functions';

export const catchErrors = async (promise: Promise<unknown>): Promise<unknown> => {
  try {
    return await promise;
  } catch (err) {
    console.error(err);
    throw new functions.https.HttpsError('unknown', err);
  }
};

// Validates UID on callable functions
export const getUID = (context: functions.https.CallableContext): unknown => {
  if (!context.auth) {
    throw new functions.https.HttpsError('permission-denied', 'function called without context.auth');
  } else {
    return context.auth.uid;
  }
};

// Validates data payload on callable functions
export const assert = (data: never, key: string): unknown => {
  if (!data[key]) {
    throw new functions.https.HttpsError('invalid-argument', `function called without ${key} data`);
  } else {
    return data[key];
  }
};
