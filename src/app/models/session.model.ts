// TODO  delete this file

import { firestore } from 'firebase';
import { Price, Duration } from './index';

// export interface Teacher {
//   displayName: 'string';
// }

export interface Session {
  readonly id: string;
  title: string;
  duration: Duration;
  price: Price;
  uid: string;
  type: 'on-demand' | 'live';
  date: firestore.Timestamp;
}
