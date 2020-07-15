/**
 * Interface for the 'Auth' data
 */
// export interface Auth {
//   user: User;
// }
export type User = Pick<
  firebase.User,
  'uid' | 'displayName' | 'email' | 'phoneNumber' | 'photoURL'
>;
