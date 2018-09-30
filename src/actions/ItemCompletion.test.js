import React from 'react';

import { ItemCompletion, ITEM_COMPLETION } from './ItemCompletion';

describe('ItemCompletion', () => {
  it('should call ItemCompletion action with an item to be completed', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const action = {
      type: ITEM_COMPLETION,
      payload: {
        modifiedItem: item,
      },
    };

    expect(ItemCompletion(item)).toEqual(action);
  });
});
