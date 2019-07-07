import React from 'react';

import { LOCALSTORAGE_NAME } from '../constants';

import { LOAD_STATE_LOCALSTORAGE } from '../actions/LoadStateLocalStorage';
import { SAVE_STATE_LOCALSTORAGE } from '../actions/SaveStateLocalStorage';

import LocalStorageReducer from './LocalStorage';

describe('TodosReducer', () => {
  it('should handle default state', () => {
    const initialState = {
      items: [],
    };

    expect(LocalStorageReducer(undefined, {})).toEqual(initialState);
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
    expect(LocalStorageReducer(undefined, action)).toEqual({
      items: [],
    });

    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify([item]));

    expect(LocalStorageReducer(undefined, action)).toEqual({
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

    expect(LocalStorageReducer({ items: [item] }, action)).toEqual({
      items: [item],
    });

    expect(localStorage.setItem).toBeCalledWith(LOCALSTORAGE_NAME, JSON.stringify({ items: [item] }));
  });
});
