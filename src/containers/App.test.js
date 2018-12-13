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
      handleAddItem: jest.fn(),
      handleCancelEditItem: jest.fn(),
      handleDeleteItem: jest.fn(),
      handleEditItem: jest.fn(),
      handleSelectEditItem: jest.fn(),
      handleItemCompletion: jest.fn(),
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

  it('should call handleAddItem', () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );

    component
      .find(App)
      .instance()
      .props.handleAddItem('0');

    expect(props.handleAddItem).toHaveBeenCalledWith('0');
  });

  it('should call handleCancelEditItem', () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );

    component
      .find(App)
      .instance()
      .props.handleCancelEditItem();

    expect(props.handleCancelEditItem).toHaveBeenCalled();
  });

  it('should call handleDeleteItem', () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );

    component
      .find(App)
      .instance()
      .props.handleDeleteItem('0');

    expect(props.handleDeleteItem).toHaveBeenCalledWith('0');
  });

  it('should call handleEditItem', () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );

    component
      .find(App)
      .instance()
      .props.handleEditItem({});

    expect(props.handleEditItem).toHaveBeenCalledWith({});
  });

  it('should call handleItemCompletion', () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );

    component
      .find(App)
      .instance()
      .props.handleItemCompletion({});

    expect(props.handleItemCompletion).toHaveBeenCalledWith({});
  });

  it('should call handleSelectEditItem', () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );

    component
      .find(App)
      .instance()
      .props.handleSelectEditItem('0');

    expect(props.handleSelectEditItem).toHaveBeenCalledWith('0');
  });
});
