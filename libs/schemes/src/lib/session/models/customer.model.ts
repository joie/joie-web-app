export interface ICustomer {
  stripeId: string;
  type?: ECustomerType;
}

export enum ECustomerType {
  ACCOUNT,
  CUSTOMER,
}
