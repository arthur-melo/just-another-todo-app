import React from 'react';

import { fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

import { renderWithRedux } from '../testHelpers';
import { ADD_ITEM } from '../actions/AddItem';

import FormContainer from './FormContainer';

const mockStore = configureMockStore();

describe('FormContainer', () => {
  it('should render the FormContainer component', () => {
    const { asFragment } = renderWithRedux(<FormContainer />);

    expect(asFragment).toBeDefined();
  });

  it('should call handleAddItem', () => {
    const { getByPlaceholderText, getByTestId, store } = renderWithRedux(<FormContainer />, {
      store: mockStore(),
    });

    const input = getByPlaceholderText('I want to do...');
    const submitButton = getByTestId('form-submit');

    fireEvent.change(input, { target: { value: 'addItem' } });
    fireEvent.click(submitButton);

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: ADD_ITEM }]);
  });
});
