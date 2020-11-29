import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const catchErrors = async (promise: Promise<unknown>): Promise<unknown> => {
  try {
    return await promise;
  } catch (err) {
    console.error(err);
    throw new functions.https.HttpsError('unknown', err);
  }
};

// Validates UID on callable functions
export const getUID = (context: functions.https.CallableContext): string | undefined => {
  if (!context.auth) {
    throw new functions.https.HttpsError('permission-denied', 'function called without context.auth');
  } else {
    return context.auth.uid;
  }
};

export const getUEmail = (context: functions.https.CallableContext): string | undefined => {
  if (!context.auth) {
    throw new functions.https.HttpsError('permission-denied', 'function called without context.auth');
  } else {
    return context.auth.token.email;
  }
};

// Validates UID on callable functions
export const isTeacher = (context: functions.https.CallableContext): boolean | undefined => {
  if (!context.auth) {
    throw new functions.https.HttpsError('permission-denied', 'function called without context.auth');
  } else {
    return context.auth.token.isTeacher;
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

export const serverTimestamp = (): admin.firestore.FieldValue => {
  return admin.firestore.FieldValue.serverTimestamp();
};
