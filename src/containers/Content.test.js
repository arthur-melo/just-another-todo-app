import React from 'react';

import { fireEvent } from '@testing-library/react';

import { renderWithRedux } from '../testHelpers';

import Content from './Content';

describe('Content', () => {
  let props;

  beforeEach(() => {
    props = {
      handleAddItem: jest.fn(),
      handleCancelEditItem: jest.fn(),
      handleDeleteItem: jest.fn(),
      handleEditItem: jest.fn(),
      handleSelectEditItem: jest.fn(),
      handleItemCompletion: jest.fn(),
      handleReorderItem: jest.fn(),
    };
  });

  it('should render the Content component', () => {
    const { container } = renderWithRedux(<Content {...props} />);

    expect(container.firstChild).toBeDefined();
  });

  it('should call handleAddItem', () => {
    const { getByPlaceholderText, getByTestId, getByText } = renderWithRedux(<Content {...props} />);

    const input = getByPlaceholderText('I want to do...');
    const submitButton = getByTestId('form-submit');

    fireEvent.change(input, { target: { value: 'addItem' } });
    fireEvent.click(submitButton);
    expect(getByText('addItem')).toBeDefined();
  });

  it('should call handleCancelEditItem', () => {
    const { getByText, getByTestId } = renderWithRedux(<Content {...props} />, {
      initialState: {
        items: [{ value: 'cancelEditItem', id: 'id', completed: false }],
        editingItem: {},
      },
    });

    // Element is listed.
    expect(getByText('cancelEditItem')).toBeDefined();

    // Hover and click on its edit button.
    const item = getByTestId('form-item-listitem');
    fireEvent.mouseOver(item);
    fireEvent.click(getByTestId('property-bar-edit-button'));

    // Cancel editing button is being shown, element is hidden.
    expect(getByTestId('form-edit-cancel-edit-button')).toBeDefined();

    fireEvent.click(getByTestId('form-edit-cancel-edit-button'));

    // Element is beign shown.
    expect(getByText('cancelEditItem')).toBeDefined();
  });

  it('should call handleDeleteItem', () => {
    const { getAllByText, getByTestId, getAllByTestId } = renderWithRedux(<Content {...props} />, {
      initialState: {
        items: [
          { value: 'deleteItem', id: 'id', completed: false },
          { value: 'deleteItem', id: 'id2', completed: false },
        ],
        editingItem: {},
      },
    });

    // Elements are listed.
    expect(getAllByText('deleteItem')).toHaveLength(2);

    // Hover on one element and click on its delete button.
    const item = getAllByTestId('form-item-listitem').shift();
    fireEvent.mouseOver(item);
    fireEvent.click(getByTestId('property-bar-delete-button'));

    // Only one element should be left.
    expect(getAllByText('deleteItem')).toHaveLength(1);
  });

  it('should call handleEditItem', () => {
    const { getByText, getByTestId, getByDisplayValue } = renderWithRedux(<Content {...props} />, {
      initialState: {
        items: [{ value: 'editItem', id: 'id', completed: false }],
        editingItem: {},
      },
    });

    // Element is listed.
    expect(getByText('editItem')).toBeDefined();

    // Hover and click on its edit button.
    const item = getByTestId('form-item-listitem');
    fireEvent.mouseOver(item);
    fireEvent.click(getByTestId('property-bar-edit-button'));

    // Edit its value and submit.
    const input = getByDisplayValue('editItem');
    const submitButton = getByTestId('form-edit-submit-button');

    fireEvent.change(input, { target: { value: 'editItemNewValue' } });
    fireEvent.click(submitButton);

    // Value should be altered.
    expect(getByText('editItemNewValue')).toBeDefined();
  });

  it('should call handleItemCompletion', () => {
    const { getByText, getByTestId, getAllByRole } = renderWithRedux(<Content {...props} />, {
      initialState: {
        items: [{ value: 'itemCompletion', id: 'id', completed: false }],
        editingItem: {},
      },
    });

    // Element is listed.
    expect(getByText('itemCompletion')).toBeDefined();

    // Hover and click on its item completion button.
    fireEvent.click(getByTestId('form-item-item-completion'));

    // Element should have a check-square icon next to it.
    const svgElements = getAllByRole('img');

    expect(svgElements).toContainEqual(expect.toHaveClass('fa-check-square'));
  });

  it('should call handleSelectEditItem', () => {
    const { queryByText, getByTestId } = renderWithRedux(<Content {...props} />, {
      initialState: {
        items: [{ value: 'selectEditItem', id: 'id', completed: false }],
        editingItem: {},
      },
    });

    // Element is listed.
    expect(queryByText('selectEditItem')).toBeDefined();

    // Hover and click on its edit button.
    const item = getByTestId('form-item-listitem');
    fireEvent.mouseOver(item);
    fireEvent.click(getByTestId('property-bar-edit-button'));

    // Cancel editing button is being shown, element is hidden.
    expect(queryByText('selectEditItem')).toBeNull();
  });
});
