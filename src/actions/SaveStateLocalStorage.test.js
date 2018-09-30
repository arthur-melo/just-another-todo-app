import React from 'react';

import { SaveStateLocalStorage, SAVE_STATE_LOCALSTORAGE } from './SaveStateLocalStorage';

describe('SaveStateLocalStorage', () => {
  it('should call SaveStateLocalStorage action', () => {
    const action = {
      type: SAVE_STATE_LOCALSTORAGE,
      payload: {},
    };

    expect(SaveStateLocalStorage()).toEqual(action);
  });
});
