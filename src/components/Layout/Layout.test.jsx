import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Layout from './Layout';

describe('Layout', () => {
  it('should render the Layout component', () => {
    const child = <div>Children</div>;
    const component = <Layout>{child}</Layout>;

    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });
});
