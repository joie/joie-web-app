import { TestBed } from '@angular/core/testing';

import { SessionsFacade } from './sessions.facade';

describe('ClassesFacade', () => {
  let service: SessionsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
