import React from 'react';

import { fireEvent } from '@testing-library/react';

import { renderWithRedux } from '../../testHelpers';

import FormItem from './FormItem';

describe('FormItem', () => {
  let props;

  beforeEach(() => {
    props = {
      item: {
        value: 'someValue',
        id: '0',
        completed: false,
      },
      handleItemCompletion: jest.fn(),
    };
  });

  it('should set handleItemCompletion prop when an item is clicked', () => {
    const { getByTestId } = renderWithRedux(<FormItem {...props} />);

    fireEvent.click(getByTestId('form-item-item-completion'));

    expect(props.handleItemCompletion).toHaveBeenCalled();
  });

  it('should set displayMenu prop when `mouseOver/mouseOut` events are fired', () => {
    const { queryByTestId, getByTestId } = renderWithRedux(<FormItem {...props} />);

    const item = getByTestId('form-item-listitem');
    fireEvent.mouseOver(item);

    expect(queryByTestId('property-bar-edit-button')).toBeDefined();
    expect(queryByTestId('property-bar-delete-button')).toBeDefined();

    fireEvent.mouseLeave(item);

    expect(queryByTestId('property-bar-edit-button')).toBeNull();
    expect(queryByTestId('property-bar-delete-button')).toBeNull();
  });
});
