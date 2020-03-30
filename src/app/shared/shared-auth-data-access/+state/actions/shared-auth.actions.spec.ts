import * as fromSharedAuth from './shared-auth.actions';

describe('loadSharedAuths', () => {
  it('should return an action', () => {
    expect(fromSharedAuth.loadSharedAuths().type).toBe('[SharedAuth] Load SharedAuths');
  });
});
