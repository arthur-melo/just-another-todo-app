import renderWithProviders from '../../../utils/testHelpers';
import WelcomeCardCTA from './WelcomeCardCTA';

describe('WelcomeCardCTA', () => {
  it('should render the WelcomeCardCTA component', () => {
    const view = renderWithProviders(<WelcomeCardCTA />);
    expect(view).toMatchSnapshot();
  });
});
