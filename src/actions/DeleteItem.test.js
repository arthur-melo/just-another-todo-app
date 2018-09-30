import React from 'react';

import { DeleteItem, DELETE_ITEM } from './DeleteItem';

describe('DeleteItem', () => {
  it('should call DeleteItem action with a given id', () => {
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
