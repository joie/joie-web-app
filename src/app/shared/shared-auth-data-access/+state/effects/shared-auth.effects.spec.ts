import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SharedAuthEffects } from './shared-auth.effects';

describe('SharedAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: SharedAuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SharedAuthEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<SharedAuthEffects>(SharedAuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
