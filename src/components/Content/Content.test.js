import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Content from './Content';

describe('Content', () => {
  let props;

  beforeEach(() => {
    props = {
      items: [],
      editingItem: {},
      className: 'content',
      handleAddItem: jest.fn(),
      handleCancelEditItem: jest.fn(),
      handleDeleteItem: jest.fn(),
      handleEditItem: jest.fn(),
      handleItemCompletion: jest.fn(),
      handleSelectEditItem: jest.fn(),
      handleReorderItem: jest.fn(),
    };
  });

  it('should show a todo items list', () => {
    const { queryByText, getByTestId, getByPlaceholderText } = render(<Content {...props} />);

    expect(queryByText('newItem')).toBeNull();

    const input = getByPlaceholderText('I want to do...');
    const submitButton = getByTestId('form-submit');

    fireEvent.change(input, { target: { value: 'newItem' } });
    fireEvent.click(submitButton);

    expect(props.handleAddItem).toHaveBeenCalled();
  });
});
