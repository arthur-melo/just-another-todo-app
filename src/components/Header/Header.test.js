import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('should render the Header component', () => {
    const className = 'test-classname';
    const { container } = render(<Header className={className} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
