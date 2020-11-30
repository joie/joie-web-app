// Initialize Firebase Admin
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Initialize Cloud Firestore Database
export const db = admin.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

// ENV Variables
export const stripeToken = functions.config().stripe.token;

// Export Stripe
import { Stripe } from 'stripe';
export const stripe = new Stripe(stripeToken, { apiVersion: '2020-08-27' });

export const API_URL = functions.config().app.api_url;
