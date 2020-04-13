/// <reference types="jest" />

import { fun } from './test-config';

fun.cleanup;

test('Firestore is initialized', () => {
  expect(db).toBeDefined();
});

test('Stripe is initialized', () => {
  expect(stripe).toBeDefined();
});
