const firebaseConfig = {
  databaseURL: 'https://joie-app.firebaseio.com',
  projectId: 'joie-app',
  storageBucket: 'joie-app.appspot.com',
};
// import * as TestFunctions from 'firebase-functions-test';
const fun = require('firebase-functions-test')(
  firebaseConfig,
  'test/firebase-service-account.json'
);
import { envConfig } from './environment-config';

// const fun = TestFunctions(firebaseConfig, 'firebase-service-account.json');

fun.mockConfig(envConfig);

export { fun };
