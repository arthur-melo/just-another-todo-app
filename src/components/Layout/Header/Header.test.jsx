import renderer from 'react-test-renderer';
import { describe, it, expect } from 'vitest';

import Header from './Header';

describe('Header', () => {
  it('should render the Header component', () => {
    const view = renderer.create(<Header />).toJSON();
    expect(view).toMatchSnapshot();
  });
});
