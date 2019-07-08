import React from 'react';

import { LOCALSTORAGE_NAME } from '../constants';

import InitialState from './InitialState';

import { LOAD_STATE_LOCALSTORAGE } from '../actions/LoadStateLocalStorage';
import { SAVE_STATE_LOCALSTORAGE } from '../actions/SaveStateLocalStorage';

import LocalStorageReducer from './LocalStorage';

describe('TodosReducer', () => {
  it('should handle default state', () => {
    // LocalStorageReducer uses a shared InitialState.
    expect(LocalStorageReducer(undefined, {})).toEqual(undefined);

    expect(LocalStorageReducer(InitialState, {})).toEqual(InitialState);
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

    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify([item]));

    expect(LocalStorageReducer(InitialState, action)).toEqual({
      ...InitialState,
      items: [item],
    });
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
        ...InitialState,
        state: {
          items: [item],
        },
      },
    };

    expect(LocalStorageReducer({ items: [item] }, action)).toEqual({
      items: [item],
    });
  });
});
