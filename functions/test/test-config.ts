import * as TestFunctions from 'firebase-functions-test';

import { envConfig } from './environment-config';

const firebaseConfig = {
  databaseURL: 'https://joie-app.firebaseio.com',
  projectId: 'joie-app',
  storageBucket: 'joie-app.appspot.com',
};

const fun = TestFunctions(firebaseConfig, 'serviceAccountKey.json');

fun.mockConfig(envConfig);

export { fun };
