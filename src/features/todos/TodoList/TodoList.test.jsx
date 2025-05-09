import { screen, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import renderWithProviders from '../../../utils/testHelpers';
import initialState from '../../../features/initialState';
import TodoList from './TodoList';
import { addItem } from '../todosSlice';

describe('TodoList', () => {
  it('should render the TodoList component', () => {
    const view = renderWithProviders(<TodoList />);
    expect(view).toMatchSnapshot();
  });

  it('should render the TodoList component with preloaded items', () => {
    const testInitialState = {
      ...initialState,
      items: [
        {
          value: 'Test todo item',
          id: '0',
          completed: false,
        },
      ],
    };

    const view = renderWithProviders(<TodoList />, {
      preloadedState: {
        todos: testInitialState,
      },
    });

    expect(view).toMatchSnapshot();
  });

  it('should add an item to the todo items list', async () => {
    const testInitialState = {
      ...initialState,
      items: [
        {
          value: 'Test todo item',
          id: '0',
          completed: false,
        },
      ],
    };

    const { store } = renderWithProviders(<TodoList />, {
      preloadedState: {
        todos: testInitialState,
      },
    });

    let todoItems;
    todoItems = screen.getAllByTestId('todo-list-item');

    expect(todoItems).toHaveLength(1);

    act(() => store.dispatch(addItem('Second todo item')));

    todoItems = screen.getAllByTestId('todo-list-item');

    expect(todoItems).toHaveLength(2);
  });
});
