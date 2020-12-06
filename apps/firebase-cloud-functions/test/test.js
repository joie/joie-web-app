const assert = require('assert');
const firebase = require('@firebase/testing');

const MY_PROJECT_ID = 'joie-app';
const myId = 'user_abc';
const theirId = 'user_xyz';
const myAuth = { uid: myId, email: 'abc@gmail.com' };

function getFirestore(auth) {
  return firebase.initializeTestApp({ projectId: MY_PROJECT_ID, auth }).firestore();
}

function getAdminFirestore() {
  return firebase.initializeAdminApp({ projectId: MY_PROJECT_ID }).firestore();
}

beforeEach(async () => {
  await firebase.clearFirestoreData({ projectId: MY_PROJECT_ID });
});

describe('Our social app', () => {
  it('can read items in the read-only collection', async () => {
    const db = getFirestore(null);
    const testDoc = db.collection('readonly').doc('testDoc');
    await firebase.assertSucceeds(testDoc.get());
  });

  it('can read own draft sessions', async () => {
    const admin = getAdminFirestore();
    const draftId = 'draftSession';
    const setupDoc = admin.collection('sessions').doc(draftId);
    await setupDoc.set({ owner: { uid: myId } });

    const db = getFirestore(myAuth);
    const testDoc = db.collection('readonly').doc(draftId);
    await firebase.assertSucceeds(testDoc.get());
  });

  it("can't write to public with no pillar field", async () => {});
});

after(async () => {
  await firebase.clearFirestoreData({ projectId: MY_PROJECT_ID });
});
