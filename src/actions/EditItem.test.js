import React from 'react';

import { EditItem, EDIT_ITEM } from './EditItem';

describe('EditItem', () => {
  it('should call EditItem action with a modified todo item value', () => {
    const item = {
      value: 'Modified todo item value',
      id: '0',
      completed: false,
    };

    const action = {
      type: EDIT_ITEM,
      payload: {
        modifiedItem: item,
      },
    };

    expect(EditItem(item)).toEqual(action);
  });
});
