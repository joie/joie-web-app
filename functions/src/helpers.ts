import * as functions from 'firebase-functions';

export const catchErrors = async (promise: Promise<any>) => {
  try {
    return await promise;
  } catch (err) {
    console.error(err);
    throw new functions.https.HttpsError('unknown', err);
  }
};

// Validates UID on callable functions
export const getUID = (context: functions.https.CallableContext) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'function called without context.auth'
    );
  } else {
    return context.auth.uid;
  }
};

export const getUEmail = (context: functions.https.CallableContext) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'function called without context.auth'
    );
  } else {
    return context.auth.token.email;
  }
};

// Validates data payload on callable functions
export const assert = (data: any, key: string) => {
  if (!data[key]) {
    throw new functions.https.HttpsError('invalid-argument', `function called without ${key} data`);
  } else {
    return data[key];
  }
};
