import React from 'react';

import { ReorderItem, REORDER_ITEM } from './ReorderItem';

describe('ReorderItem', () => {
  it('should call ReorderItem action', () => {
    const initialPosition = 1;
    const newPosition = 0;

    const action = {
      type: REORDER_ITEM,
      payload: {
        initialPosition,
        newPosition,
      },
    };

    expect(ReorderItem(initialPosition, newPosition)).toEqual(action);
  });
});
