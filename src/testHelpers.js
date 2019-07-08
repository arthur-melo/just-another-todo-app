import React from 'react';

import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import InitialState from './reducers/InitialState';
import AppReducer from './reducers';

export const renderWithRedux = (
  ui,
  { initialState = InitialState, reducer = AppReducer, store = createStore(reducer, initialState) } = {},
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});
