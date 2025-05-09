import renderer from 'react-test-renderer';
import { describe, it, expect } from 'vitest';

import Layout from './Layout';

describe('Layout', () => {
  it('should render the Layout component', () => {
    const child = <div>Children</div>;
    const component = <Layout>{child}</Layout>;

    const view = renderer.create(component).toJSON();
    expect(view).toMatchSnapshot();
  });
});
