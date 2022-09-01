import { screen, fireEvent } from '@testing-library/react';

import initialState from '../../initialState';
import renderWithProviders from '../../../utils/testHelpers';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  it('should mark item as completed when clicked on its completion button', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const testInitialState = {
      ...initialState,
      items: [item],
    };

    const { store } = renderWithProviders(<TodoItem item={item} />, {
      preloadedState: {
        todos: testInitialState,
      },
    });

    const itemCompletionButton = screen.getByTestId(
      'todo_item-item-completion',
    );

    fireEvent.click(itemCompletionButton);

    const stateItem = store.getState().todos.items.at(0);

    expect(stateItem.completed).toBe(true);
  });

  it('should set displayMenu prop when `mouseOver/mouseOut` events are fired', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const testInitialState = {
      ...initialState,
      items: [item],
    };

    renderWithProviders(<TodoItem item={item} />, {
      preloadedState: {
        todos: testInitialState,
      },
    });

    const itemDiv = screen.getByTestId('todo_item-listitem');
    fireEvent.mouseOver(itemDiv);

    const propertyBarEditButton = screen.getByTitle('Edit');
    const propertyBarDeleteButton = screen.getByTitle('Delete');

    expect(propertyBarEditButton).toBeInTheDocument();
    expect(propertyBarDeleteButton).toBeInTheDocument();

    fireEvent.mouseLeave(itemDiv);

    expect(propertyBarEditButton).not.toBeInTheDocument();
    expect(propertyBarDeleteButton).not.toBeInTheDocument();
  });
});
