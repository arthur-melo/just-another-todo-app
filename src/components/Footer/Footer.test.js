import React from 'react';

import { render } from '@testing-library/react';

import Footer from './Footer';

it('should render the Footer component', () => {
  const className = 'test-classname';
  const { asFragment } = render(<Footer className={className} />);

  expect(asFragment).toMatchSnapshot();
});
