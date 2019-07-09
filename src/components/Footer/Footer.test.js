import React from 'react';

import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('should render the Footer component', () => {
    const className = 'test-classname';

    const { container } = render(<Footer className={className} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
