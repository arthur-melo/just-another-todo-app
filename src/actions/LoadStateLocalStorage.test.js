import React from 'react';

import { LoadStateLocalStorage, LOAD_STATE_LOCALSTORAGE } from './LoadStateLocalStorage';

describe('LoadStateLocalStorage', () => {
  it('should call LoadStateLocalStorage action', () => {
    const action = {
      type: LOAD_STATE_LOCALSTORAGE,
      payload: {},
    };

    expect(LoadStateLocalStorage()).toEqual(action);
  });
});
