import { firestore } from 'firebase';
export interface Duration {
  amount: number;
  unit: 'ms';
}
export interface Price {
  display: number;
  currency: 'USD';
}
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
