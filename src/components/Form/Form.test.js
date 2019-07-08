import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

describe('Form', () => {
  let props;

  beforeEach(() => {
    props = {
      handleAddItem: jest.fn(),
    };
  });

  it('should handle form submission', () => {
    const { getByTestId, getByPlaceholderText } = render(<Form {...props} />);

    const input = getByPlaceholderText('I want to do...');
    const submitButton = getByTestId('form-submit');

    fireEvent.change(input, { target: { value: 'addItem' } });
    fireEvent.click(submitButton);

    expect(props.handleAddItem).toHaveBeenCalled();
  });
});
