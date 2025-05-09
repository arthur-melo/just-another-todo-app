import renderWithProviders from '../../../utils/testHelpers';
import WelcomeCardCTA from './WelcomeCardCTA';
import { describe, it, expect } from 'vitest';

describe('WelcomeCardCTA', () => {
  it('should render the WelcomeCardCTA component', () => {
    const view = renderWithProviders(<WelcomeCardCTA />);
    expect(view).toMatchSnapshot();
  });
});
