import React from 'react';

import { DeleteItem, DELETE_ITEM } from './DeleteItem';

describe('DeleteItem', () => {
  it('verify if DeleteItem action is called with a given id', () => {
    const itemId = '0';

    const action = {
      type: DELETE_ITEM,
      payload: {
        id: itemId,
      },
    };

    expect(DeleteItem(itemId)).toEqual(action);
  });
});
