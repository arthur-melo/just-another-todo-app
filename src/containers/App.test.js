import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import App from './App';
import AppReducer from '../reducers';

describe('App', () => {
  let props;
  let store;

  beforeEach(() => {
    props = {
      handleLoadStateLocalStorage: jest.fn(),
      handleSaveStateLocalStorage: jest.fn(),
    };
    store = createStore(AppReducer);
  });

  it('should render without errors', () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );

    expect(component).toHaveLength(1);
  });
});
