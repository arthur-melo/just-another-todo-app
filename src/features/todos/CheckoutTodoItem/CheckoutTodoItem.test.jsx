import renderer from 'react-test-renderer';
import { describe, it, expect } from 'vitest';

import CheckoutTodoItem from './CheckoutTodoItem';

describe('CheckoutTodoItem', () => {
  it('should render the component with a checkmark icon when isCompleted prop is true', async () => {
    const completed = true;

    const view = renderer
      .create(<CheckoutTodoItem isCompleted={completed} />)
      .toJSON();

    expect(view).toMatchSnapshot();
  });

  it('should render the component with a square icon when isCompleted prop is false', async () => {
    const completed = false;

    const view = renderer
      .create(<CheckoutTodoItem isCompleted={completed} />)
      .toJSON();

    expect(view).toMatchSnapshot();
  });
});
