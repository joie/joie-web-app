import { TestBed } from '@angular/core/testing';

import { DynaFormService } from './dyna-form.service';

describe('DynaFormService', () => {
  let service: DynaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
