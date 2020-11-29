import { TestBed } from '@angular/core/testing';

import { KalturaService } from './kaltura.service';

describe('KalturaService', () => {
  let service: KalturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KalturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
