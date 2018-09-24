import React from 'react';

import { SelectEditItem, SELECT_EDIT_ITEM } from './SelectEditItem';

describe('SelectEditItem', () => {
  it('verify if SelectEditItem action is called with an item that will be modified', () => {
    const itemId = {
      id: '0',
    };

    const action = {
      type: SELECT_EDIT_ITEM,
      payload: {
        id: itemId,
      },
    };

    expect(SelectEditItem(itemId)).toEqual(action);
  });
});
