import React from 'react';

import { render, fireEvent } from '@testing-library/react';

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
      handleDeleteItem: jest.fn(),
      handleSelectEditItem: jest.fn(),
      handleItemCompletion: jest.fn(),
    };
  });

  it('should set handleItemCompletion prop when an item is clicked', () => {
    const { getByTestId } = render(<FormItem {...props} />);

    fireEvent.click(getByTestId('form-item-item-completion'));

    expect(props.handleItemCompletion).toHaveBeenCalled();
  });

  it('should set displayMenu prop when `mouseOver/mouseOut` events are fired', () => {
    const { queryByTestId, getByTestId } = render(<FormItem {...props} />);

    const item = getByTestId('form-item-listitem');
    fireEvent.mouseOver(item);

    expect(queryByTestId('property-bar-edit-button')).toBeDefined();
    expect(queryByTestId('property-bar-delete-button')).toBeDefined();

    fireEvent.mouseOut(item);

    expect(queryByTestId('property-bar-edit-button')).toBeNull();
    expect(queryByTestId('property-bar-delete-button')).toBeNull();
  });
});
