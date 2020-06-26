export interface Duration {
  amount: number;
  unit: 'ms';
}
export interface Price {
  display: number;
  currency: 'USD';
}
export interface Teacher {
  displayName: 'string';
}

export interface Class {
  title: string;
  duration: Duration;
  price: Price;
  teacher: Teacher;
  type: 'on-demand' | 'live';
  date: number;
}
