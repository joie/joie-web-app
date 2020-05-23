import { TestBed } from '@angular/core/testing';

import { ClassesFacade } from './classes.facade';

describe('ClassesFacade', () => {
  let service: ClassesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
