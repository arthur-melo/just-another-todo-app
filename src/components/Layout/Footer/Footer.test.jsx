import renderer from 'react-test-renderer';
import { describe, it, expect } from 'vitest';

import Footer from './Footer';

describe('Footer', () => {
  it('should render the Footer component', () => {
    const view = renderer.create(<Footer />).toJSON();
    expect(view).toMatchSnapshot();
  });
});
