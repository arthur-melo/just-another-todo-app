import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Header from './Header';

describe('Header', () => {
  it('should render the Header component', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
