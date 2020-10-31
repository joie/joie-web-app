import { TestBed } from '@angular/core/testing';

import { BreakpointsFacade } from './breakpoints.facade';

describe('BreakpointsFacade', () => {
  let facade: BreakpointsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    facade = TestBed.inject(BreakpointsFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
