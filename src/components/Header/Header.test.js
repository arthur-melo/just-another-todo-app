import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

it('should render the Header component', () => {
  const className = 'test-classname';
  const { asFragment } = render(<Header className={className} />);

  expect(asFragment).toMatchSnapshot();
});
