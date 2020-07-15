/// <reference types="jest" />

import { fun } from './test-config';
import { db, stripeToken, stripe } from '../src/config';

fun.cleanup;

test('Firestore is initialized', () => {
  expect(db).toBeDefined();
});

test('Stripe token is exist', () => {
  expect(stripeToken).toBeDefined();
});

test('Stripe is initialized', () => {
  expect(stripe).toBeDefined();
});
