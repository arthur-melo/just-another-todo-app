import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import FormEdit from './FormEdit';

describe('FormEdit', () => {
  let props;

  beforeEach(() => {
    props = {
      item: {
        value: 'someValue',
        id: '0',
        completed: false,
      },
      handleEditItem: jest.fn(),
      handleCancelEditItem: jest.fn(),
    };
  });

  it('should handle form submission', () => {
    const { getByTestId, getByDisplayValue } = render(<FormEdit {...props} />);

    // Edit its value and submit.
    const input = getByDisplayValue('someValue');
    const submitButton = getByTestId('form-edit-submit-button');

    fireEvent.change(input, { target: { value: 'editItemNewValue' } });
    fireEvent.click(submitButton);

    expect(props.handleEditItem).toHaveBeenCalled();
  });

  it('should set handleCancelEditItem prop when button is pressed', () => {
    const { getByTestId } = render(<FormEdit {...props} />);

    const submitButton = getByTestId('form-edit-cancel-edit-button');

    fireEvent.click(submitButton);

    expect(props.handleCancelEditItem).toHaveBeenCalled();
  });

  it('should set handleCancelEditItem prop when `escape` key is pressed', () => {
    render(<FormEdit {...props} />);

    fireEvent.keyUp(window, { code: 'Escape' });

    expect(props.handleCancelEditItem).toHaveBeenCalled();
  });
});
