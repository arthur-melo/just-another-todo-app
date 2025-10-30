import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Footer from './Footer';

describe('Footer', () => {
  it('should render the Footer component', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
