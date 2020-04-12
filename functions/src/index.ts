import * as admin from 'firebase-admin';

admin.initializeApp();
///// USER /////

//USER
export { newUserSetup } from './user';
export { newPostSetup } from './post';
export * from './stripe';
