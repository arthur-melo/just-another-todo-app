import React from 'react';

import { fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

import { renderWithRedux } from '../testHelpers';
import { EDIT_ITEM } from '../actions/EditItem';
import { CANCEL_EDIT_ITEM } from '../actions/CancelEditItem';

import FormEditContainer from './FormEditContainer';

const mockStore = configureMockStore();

describe('FormEditContainer', () => {
  let props;

  beforeEach(() => {
    props = {
      item: {
        value: 'testItem',
        id: '0',
        completed: false,
      },
    };
  });

  it('should render the FormEditContainer component', () => {
    const { asFragment } = renderWithRedux(<FormEditContainer {...props} />);

    expect(asFragment).toBeDefined();
  });

  it('should call handleCancelEditItem', () => {
    const { getByDisplayValue, getByTestId, store } = renderWithRedux(<FormEditContainer {...props} />, {
      store: mockStore(),
    });

    // Element is listed.
    expect(getByDisplayValue('testItem')).toBeDefined();

    // Cancel editing button is being shown.
    expect(getByTestId('form-edit-cancel-edit-button')).toBeDefined();

    fireEvent.click(getByTestId('form-edit-cancel-edit-button'));

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: CANCEL_EDIT_ITEM }]);
  });

  it('should call handleEditItem', () => {
    const { getByTestId, getByDisplayValue, store } = renderWithRedux(<FormEditContainer {...props} />, {
      store: mockStore(),
    });

    // Element is listed.
    expect(getByDisplayValue('testItem')).toBeDefined();

    // Edit item value and submit.
    const input = getByDisplayValue('testItem');
    const submitButton = getByTestId('form-edit-submit-button');

    fireEvent.change(input, { target: { value: 'editTestItem' } });
    fireEvent.click(submitButton);

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: EDIT_ITEM }]);
  });
});
