import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import CheckoutTodoItem from './CheckoutTodoItem';

describe('CheckoutTodoItem', () => {
  it('should render the component with a checkmark icon when isCompleted prop is true', async () => {
    const completed = true;

    const { asFragment } = render(<CheckoutTodoItem isCompleted={completed} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the component with a square icon when isCompleted prop is false', async () => {
    const completed = false;

    const { asFragment } = render(<CheckoutTodoItem isCompleted={completed} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
