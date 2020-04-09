import { TestBed } from '@angular/core/testing';

import { ProbableRoutePreloadingStrategy } from './probable-route-preloading-strategy.service';

describe('ProbableRouteModuleLoaderService', () => {
  let service: ProbableRoutePreloadingStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbableRoutePreloadingStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
