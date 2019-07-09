import React from 'react';

import { fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

import { renderWithRedux } from '../testHelpers';
import { DELETE_ITEM } from '../actions/DeleteItem';
import { SELECT_EDIT_ITEM } from '../actions/SelectEditItem';

import PropertyBarContainer from './PropertyBarContainer';

const mockStore = configureMockStore();

describe('PropertyBarContainer', () => {
  let props;

  beforeEach(() => {
    props = {
      id: '0',
    };
  });

  it('should render the PropertyBarContainer component', () => {
    const { asFragment } = renderWithRedux(<PropertyBarContainer {...props} />);

    expect(asFragment).toBeDefined();
  });

  it('should call handleDeleteItem', () => {
    const { getByTestId, store } = renderWithRedux(<PropertyBarContainer {...props} />, {
      store: mockStore(),
    });

    fireEvent.click(getByTestId('property-bar-delete-button'));

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: DELETE_ITEM }]);
  });

  it('should call handleSelectEditItem', () => {
    const { getByTestId, store } = renderWithRedux(<PropertyBarContainer {...props} />, {
      store: mockStore(),
    });

    fireEvent.click(getByTestId('property-bar-edit-button'));

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: SELECT_EDIT_ITEM }]);
  });
});
