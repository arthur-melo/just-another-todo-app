import React from 'react';

import { fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

import { renderWithRedux } from '../testHelpers';
import { ITEM_COMPLETION } from '../actions/ItemCompletion';

import FormItemContainer from './FormItemContainer';

const mockStore = configureMockStore();

describe('FormItemContainer', () => {
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

  it('should render the FormItemContainer component', () => {
    const { asFragment } = renderWithRedux(<FormItemContainer {...props} />);

    expect(asFragment).toBeDefined();
  });

  it('should call handleItemCompletion', () => {
    const { getByText, getByTestId, store } = renderWithRedux(<FormItemContainer {...props} />, {
      store: mockStore(),
    });

    // Element is listed.
    expect(getByText('testItem')).toBeDefined();

    fireEvent.click(getByTestId('form-item-item-completion'));

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: ITEM_COMPLETION }]);
  });
});
