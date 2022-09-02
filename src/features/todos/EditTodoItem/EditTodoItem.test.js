import { screen, fireEvent } from '@testing-library/react';

import renderWithProviders from '../../../utils/testHelpers';
import EditTodoItem from './EditTodoItem';

describe('EditTodoItem', () => {
  it('should handle editing a todo item', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const testInitialState = {
      items: [item],
      editingItem: item,
    };

    const { store } = renderWithProviders(<EditTodoItem item={item} />, {
      preloadedState: {
        todos: testInitialState,
      },
    });

    const input = screen.getByDisplayValue('Test todo item');
    const submitButton = screen.getByTitle('Confirm');

    fireEvent.change(input, { target: { value: 'New name' } });
    fireEvent.click(submitButton);

    const editedItem = store.getState().todos.items.at(0);

    expect(editedItem).toEqual({
      value: expect.stringMatching('New name'),
      id: expect.any(String),
      completed: expect.any(Boolean),
    });
  });

  it('should stop an item editing action', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const testInitialState = {
      items: [item],
      editingItem: item,
    };

    const { store } = renderWithProviders(<EditTodoItem item={item} />, {
      preloadedState: {
        todos: testInitialState,
      },
    });

    expect(store.getState().todos.editingItem).toEqual(item);

    const cancelEditingActionButton = screen.getByTitle('Cancel');

    fireEvent.click(cancelEditingActionButton);

    expect(store.getState().todos.editingItem).toEqual({});
  });

  it('should stop an editing action by pressing the `escape` key', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const testInitialState = {
      items: [item],
      editingItem: item,
    };

    const { store } = renderWithProviders(<EditTodoItem item={item} />, {
      preloadedState: {
        todos: testInitialState,
      },
    });

    expect(store.getState().todos.editingItem).toEqual(item);

    fireEvent.keyUp(window, { code: 'Escape' });

    expect(store.getState().todos.editingItem).toEqual({});
  });
});
