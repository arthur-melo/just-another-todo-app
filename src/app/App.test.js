import renderWithProviders from '../utils/testHelpers';
import initialState from '../features/initialState';

import App from './App';

describe('App', () => {
  it('should render the App component', () => {
    const view = renderWithProviders(<App />);
    expect(view).toMatchSnapshot();
  });

  it('should render the App component with preloaded items', () => {
    const testInitialState = {
      ...initialState,
      items: [
        {
          value: 'Test todo item',
          id: '0',
          completed: false,
        },
      ],
    };

    const view = renderWithProviders(<App />, {
      preloadedState: {
        todos: testInitialState,
      },
    });

    expect(view).toMatchSnapshot();
  });
});
