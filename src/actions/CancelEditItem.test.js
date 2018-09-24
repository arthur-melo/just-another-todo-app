import React from 'react';

import { CancelEditItem, CANCEL_EDIT_ITEM } from './CancelEditItem';

describe('CancelEditItem', () => {
  it('verify if CancelEditItem action is called', () => {
    const action = {
      type: CANCEL_EDIT_ITEM,
      payload: {},
    };

    expect(CancelEditItem()).toEqual(action);
  });
});
