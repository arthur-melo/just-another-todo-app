import React from 'react';

import { SaveStateLocalStorage, SAVE_STATE_LOCALSTORAGE } from './SaveStateLocalStorage';

describe('SaveStateLocalStorage', () => {
  it('verify if SaveStateLocalStorage action is called', () => {
    const action = {
      type: SAVE_STATE_LOCALSTORAGE,
      payload: {},
    };

    expect(SaveStateLocalStorage()).toEqual(action);
  });
});
