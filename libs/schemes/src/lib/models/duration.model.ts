export interface Duration {
  amount: number;
  unit: DurationUnits;
}

export enum DurationUnits {
  ms = 'ms',
  s = 's',
  m = 'm',
}
