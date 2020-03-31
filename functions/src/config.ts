import * as admin from 'firebase-admin';
export const db = admin.firestore();

// The timestampsInSnapshots setting now defaults to true and you no
// longer need to explicitly set it.In a future release, the setting
// will be removed entirely and so it is recommended that you remove it
// from your firestore.settings() call now.
// const settings = { timestampsInSnapshots: true };
// db.settings(settings);
