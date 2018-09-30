import React from 'react';

import { CancelEditItem, CANCEL_EDIT_ITEM } from './CancelEditItem';

describe('CancelEditItem', () => {
  it('should call CancelEditItem action', () => {
    const action = {
      type: CANCEL_EDIT_ITEM,
      payload: {},
    };

    expect(CancelEditItem()).toEqual(action);
  });
});
