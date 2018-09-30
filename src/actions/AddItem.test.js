import React from 'react';

import { AddItem, ADD_ITEM } from './AddItem';

describe('AddItem', () => {
  it('should call AddItem action', () => {
    const newItem = 'Some new todo item';

    const action = {
      type: ADD_ITEM,
      payload: {
        value: newItem,
      },
    };

    expect(AddItem(newItem)).toEqual(action);
  });
});
