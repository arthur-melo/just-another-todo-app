import { fireEvent, screen } from '@testing-library/react';

import renderWithProviders from '../../../utils/testHelpers';
import CreateTodoItem from './CreateTodoItem';

describe('CreateTodoItem', () => {
  it('should handle creating a todo item', () => {
    const { store } = renderWithProviders(<CreateTodoItem />);

    const input = screen.getByPlaceholderText('I want to do...');
    const submitButton = screen.getByTitle('Add todo item');

    fireEvent.change(input, { target: { value: 'Test todo item' } });
    fireEvent.click(submitButton);

    expect(store.getState().todos.items).toHaveLength(1);
  });
});
