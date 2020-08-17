import { TestBed } from '@angular/core/testing';

import { SessionFormResolverService } from './session-form-resolver.service';

describe('SessionFormResolverService', () => {
  let service: SessionFormResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionFormResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
