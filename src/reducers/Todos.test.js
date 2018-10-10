import React from 'react';

import { LOCALSTORAGE_NAME } from '../constants';

import { ADD_ITEM } from '../actions/AddItem';
import { CANCEL_EDIT_ITEM } from '../actions/CancelEditItem';
import { DELETE_ITEM } from '../actions/DeleteItem';
import { EDIT_ITEM } from '../actions/EditItem';
import { ITEM_COMPLETION } from '../actions/ItemCompletion';
import { SELECT_EDIT_ITEM } from '../actions/SelectEditItem';
import { LOAD_STATE_LOCALSTORAGE } from '../actions/LoadStateLocalStorage';
import { SAVE_STATE_LOCALSTORAGE } from '../actions/SaveStateLocalStorage';
import { REORDER_ITEM } from '../actions/ReorderItem';

import TodosReducer from './Todos';

describe('TodosReducer', () => {
  it('should handle default state', () => {
    const initialState = {
      items: [],
    };

    expect(TodosReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOAD_STATE_LOCALSTORAGE', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const action = {
      type: LOAD_STATE_LOCALSTORAGE,
    };

    // Empty initial localstorage.
    expect(TodosReducer(undefined, action)).toEqual({
      items: [],
    });

    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify([item]));

    expect(TodosReducer(undefined, action)).toEqual({
      items: [item],
    });

    expect(localStorage.getItem).toBeCalledWith(LOCALSTORAGE_NAME);
  });

  it('should handle SAVE_STATE_LOCALSTORAGE', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const action = {
      type: SAVE_STATE_LOCALSTORAGE,
      payload: {
        state: {
          items: [item],
        },
      },
    };

    expect(TodosReducer({ items: [item] }, action)).toEqual({
      items: [item],
    });

    expect(localStorage.setItem).toBeCalledWith(LOCALSTORAGE_NAME, JSON.stringify({ items: [item] }));
  });

  it('should handle ADD_ITEM', () => {
    const todoItemName = 'Test todo item';

    const action = {
      type: ADD_ITEM,
      payload: { value: todoItemName },
    };

    // Single item.
    expect(TodosReducer(undefined, action)).toEqual({
      items: [
        {
          value: todoItemName,
          id: expect.any(String),
          completed: false,
        },
      ],
    });

    // Multiple items.
    expect(
      TodosReducer(
        {
          items: [
            {
              value: todoItemName,
              id: '0',
              completed: false,
            },
          ],
        },
        action,
      ),
    ).toEqual({
      items: [
        {
          value: todoItemName,
          id: expect.any(String),
          completed: false,
        },
        {
          value: todoItemName,
          id: expect.any(String),
          completed: false,
        },
      ],
    });
  });

  it('should handle CANCEL_EDIT_ITEM', () => {
    const action = {
      type: CANCEL_EDIT_ITEM,
    };

    // No item selected.
    expect(TodosReducer(undefined, action)).toEqual({
      items: [],
    });

    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    // Some item selected.
    expect(
      TodosReducer(
        {
          editingItem: item,
          items: [item],
        },
        action,
      ),
    ).toEqual({
      editingItem: {},
      items: [item],
    });
  });

  it('should handle DELETE_ITEM', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const action = {
      type: DELETE_ITEM,
      payload: {
        id: item.id,
      },
    };

    // No item selected.
    expect(TodosReducer(undefined, action)).toEqual({
      items: [],
    });

    // Some item selected
    expect(
      TodosReducer(
        {
          items: [item],
        },
        action,
      ),
    ).toEqual({
      items: [],
    });
  });

  it('should handle EDIT_ITEM', () => {
    const name = 'test todo item';
    const newName = `New ${name}`;

    const item = {
      value: name,
      id: '0',
      completed: false,
    };

    const action = {
      type: EDIT_ITEM,
      payload: {
        modifiedItem: { ...item, value: newName },
      },
    };

    expect(
      TodosReducer(
        {
          editingItem: item,
          items: [item],
        },
        action,
      ),
    ).toEqual({
      editingItem: {},
      items: [{ ...item, value: newName }],
    });
  });

  it('should handle ITEM_COMPLETION', () => {
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

    expect(
      TodosReducer(
        {
          items: [item],
        },
        action,
      ),
    ).toEqual({
      items: [{ ...item, completed: true }],
    });

    expect(
      TodosReducer(
        {
          items: [{ ...item, completed: true }],
        },
        action,
      ),
    ).toEqual({
      items: [{ ...item, completed: false }],
    });
  });

  it('should handle SELECT_EDIT_ITEM', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const action = {
      type: SELECT_EDIT_ITEM,
      payload: {
        id: item.id,
      },
    };

    expect(
      TodosReducer(
        {
          editingItem: {},
          items: [item],
        },
        action,
      ),
    ).toEqual({
      editingItem: item,
      items: [item],
    });
  });

  it('should handle REORDER_ITEM', () => {
    const items = ['First item', 'Second item', 'Third item'];

    const action = {
      type: REORDER_ITEM,
      payload: {
        initialPosition: items.findIndex(el => el === 'First item'),
        newPosition: items.findIndex(el => el === 'Third item'),
      },
    };

    // Value is shuffled to newPosition.
    expect(
      TodosReducer(
        {
          items,
        },
        action,
      ),
    ).toEqual({
      items: ['Second item', 'Third item', 'First item'],
    });
  });
});
