import React from 'react';

import configureMockStore from 'redux-mock-store';
import {
  mockGetComputedSpacing,
  mockDndElSpacing,
  makeDnd,
  DND_DRAGGABLE_DATA_ATTR,
  DND_DIRECTION_DOWN,
} from 'react-beautiful-dnd-test-utils';

import { renderWithRedux } from '../testHelpers';
import { REORDER_ITEM } from '../actions/ReorderItem';

import ContentContainer from './ContentContainer';

const mockStore = configureMockStore();

describe('ContentContainer', () => {
  let props;

  beforeEach(() => {
    props = {
      className: 'testClassname',
    };

    mockGetComputedSpacing();
  });

  it('should render the ContentContainer component', () => {
    const { asFragment } = renderWithRedux(<ContentContainer {...props} />);

    expect(asFragment).toBeDefined();
  });

  it('should call handleReorderItem', async () => {
    const initialState = {
      items: [
        { value: 'testItem1', id: '0', completed: false },
        { value: 'testItem2', id: '1', completed: false },
      ],
      editingItem: {},
    };
    const rtlUtils = renderWithRedux(<ContentContainer {...props} />, {
      store: mockStore(initialState),
    });

    mockDndElSpacing(rtlUtils);

    const makeGetDragEl = text => () => rtlUtils.getByText(text).closest(DND_DRAGGABLE_DATA_ATTR);

    const { getByText, getAllByTestId, store } = { makeGetDragEl, ...rtlUtils };

    await makeDnd({
      getByText,
      getDragEl: makeGetDragEl('testItem1'),
      direction: DND_DIRECTION_DOWN,
      positions: 1,
    });

    const items = getAllByTestId('content-draggable-item');

    expect(items).toHaveLength(2);

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: REORDER_ITEM }]);
  });
});
