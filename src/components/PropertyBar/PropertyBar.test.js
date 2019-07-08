import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import PropertyBar from './PropertyBar';

describe('Checkout', () => {
  let props;

  beforeEach(() => {
    props = {
      id: 'testId',
      handleSelectEditItem: jest.fn(),
      handleDeleteItem: jest.fn(),
    };
  });

  it('should set handleSelectEditItem prop when edit button is clicked', () => {
    const { getByTestId } = render(<PropertyBar {...props} />);

    fireEvent.click(getByTestId('property-bar-edit-button'));

    expect(props.handleSelectEditItem).toHaveBeenCalled();
  });

  it('should set handleDeleteItem prop when delete button is clicked', () => {
    const { getByTestId } = render(<PropertyBar {...props} />);

    fireEvent.click(getByTestId('property-bar-delete-button'));

    expect(props.handleDeleteItem).toHaveBeenCalled();
  });
});
