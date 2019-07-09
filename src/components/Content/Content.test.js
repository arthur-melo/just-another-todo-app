import React from 'react';

import { fireEvent } from '@testing-library/react';
import {
  mockGetComputedSpacing,
  mockDndElSpacing,
  makeDnd,
  DND_DRAGGABLE_DATA_ATTR,
  DND_DIRECTION_DOWN,
} from 'react-beautiful-dnd-test-utils';

import { renderWithRedux } from '../../testHelpers';

import Content from './Content';

describe('Content', () => {
  let props;

  beforeEach(() => {
    props = {
      className: 'testClassname',
      items: [],
      editingItem: {},
      handleReorderItem: jest.fn(),
    };

    mockGetComputedSpacing();
  });

  it('should render the Content component', () => {
    const { asFragment } = renderWithRedux(<Content {...props} />);

    expect(asFragment).toBeDefined();
  });

  it('should add an item to the todo items list', () => {
    const { queryByText, getByTestId, getByPlaceholderText } = renderWithRedux(<Content {...props} />);

    expect(queryByText('newItem')).toBeNull();

    const input = getByPlaceholderText('I want to do...');
    const submitButton = getByTestId('form-submit');

    fireEvent.change(input, { target: { value: 'newItem' } });
    fireEvent.click(submitButton);

    expect(queryByText('newItem')).toBeDefined();
  });

  it('should call handleReorderItem', async () => {
    props = {
      ...props,
      items: [
        { value: 'testItem1', id: '0', completed: false },
        { value: 'testItem2', id: '1', completed: false },
      ],
    };

    const rtlUtils = renderWithRedux(<Content {...props} />);

    mockDndElSpacing(rtlUtils);

    const makeGetDragEl = text => () => rtlUtils.getByText(text).closest(DND_DRAGGABLE_DATA_ATTR);

    const { getByText } = { makeGetDragEl, ...rtlUtils };

    await makeDnd({
      getByText,
      getDragEl: makeGetDragEl('testItem1'),
      direction: DND_DIRECTION_DOWN,
      positions: 1,
    });

    expect(props.handleReorderItem).toHaveBeenCalled();
  });
});
