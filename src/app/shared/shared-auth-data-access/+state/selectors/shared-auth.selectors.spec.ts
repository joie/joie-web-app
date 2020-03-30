import * as fromSharedAuth from '../reducers/shared-auth.reducer';
import { selectSharedAuthState } from './shared-auth.selectors';

describe('SharedAuth Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSharedAuthState({
      [fromSharedAuth.sharedAuthFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
