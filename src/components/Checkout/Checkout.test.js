import React from 'react';

import { render } from '@testing-library/react';

import Checkout from './Checkout';

describe('Checkout', () => {
  it('renders a checkmark icon when received prop is true', () => {
    const completed = true;

    const { getByRole } = render(<Checkout isCompleted={completed} />);

    expect(getByRole('img', { hidden: true })).toHaveClass('fa-check-square');
  });

  it('renders a square icon when received prop is false', () => {
    const completed = false;

    const { getByRole } = render(<Checkout isCompleted={completed} />);

    expect(getByRole('img', { hidden: true })).toHaveClass('fa-square');
  });
});
