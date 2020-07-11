import { TestBed } from '@angular/core/testing';

import { PaymentSourceGuard } from './payment-source.guard';

describe('PaymentSourceGuard', () => {
  let guard: PaymentSourceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentSourceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
