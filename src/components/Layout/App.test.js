import React from 'react';

import { renderWithRedux } from '../../testHelpers';

import App from './App';

describe('App', () => {
  it('should render the App component', () => {
    const { asFragment } = renderWithRedux(<App />);

    expect(asFragment).toBeDefined();
  });
});
