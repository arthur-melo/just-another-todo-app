import React from 'react';

import { fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

import { LOCALSTORAGE_NAME } from '../constants';
import { renderWithRedux } from '../testHelpers';
import InitialState from '../reducers/InitialState';
import { LOAD_STATE_LOCALSTORAGE } from '../actions/LoadStateLocalStorage';
import { SAVE_STATE_LOCALSTORAGE } from '../actions/SaveStateLocalStorage';

import AppContainer from './AppContainer';

const mockStore = configureMockStore();

describe('AppContainer', () => {
  it('should render the App component', () => {
    const { asFragment } = renderWithRedux(<AppContainer />);

    expect(asFragment).toBeDefined();
  });

  it('should call handleLoadStateLocalStorage', () => {
    localStorage.setItem(LOCALSTORAGE_NAME, '[{"value":"testItem","id":"0","completed":false}]');

    const { store } = renderWithRedux(<AppContainer />, {
      store: mockStore(InitialState),
    });

    const actions = store.getActions();
    expect(actions).toContainEqual(expect.objectContaining({ type: LOAD_STATE_LOCALSTORAGE }));
  });

  it('should call handleSaveStateLocalStorage', async () => {
    const { getByPlaceholderText, getByTestId, store } = renderWithRedux(<AppContainer />, {
      store: mockStore(InitialState),
    });

    // Add a new item
    const input = getByPlaceholderText('I want to do...');
    const submitButton = getByTestId('form-submit');

    fireEvent.change(input, { target: { value: 'testItem' } });
    fireEvent.click(submitButton);
  });
});
