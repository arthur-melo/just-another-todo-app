import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import initialState from '../../initialState';
import renderWithProviders from '../../../utils/testHelpers';
import PropertyBarTodoItem from './PropertyBarTodoItem';

describe('PropertyBarTodoItem', () => {
  it('should set an editing item when edit button is pressed', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const testInitialState = {
      ...initialState,
      items: [item],
    };

    const { store } = renderWithProviders(
      <PropertyBarTodoItem id={item.id} />,
      {
        preloadedState: {
          todos: testInitialState,
        },
      },
    );

    expect(store.getState().todos.editingItem).toEqual({});

    const editButton = screen.getByTitle('Edit');

    fireEvent.click(editButton);

    expect(store.getState().todos.editingItem).toEqual(item);
  });

  it('should delete an item when delete button is pressed', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const testInitialState = {
      ...initialState,
      items: [item],
    };

    const { store } = renderWithProviders(
      <PropertyBarTodoItem id={item.id} />,
      {
        preloadedState: {
          todos: testInitialState,
        },
      },
    );

    expect(store.getState().todos.items).toHaveLength(1);

    const deleteButton = screen.getByTitle('Delete');

    fireEvent.click(deleteButton);

    expect(store.getState().todos.items).toHaveLength(0);
  });
});
