import { act } from '@testing-library/react';
import initialState from '../../features/initialState';
import renderWithProviders from '../../utils/testHelpers';

import LocalStorage from './LocalStorage';
import { addItem, deleteItem } from '../../features/todos/todosSlice';

describe('LocalStorage', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'removeItem');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should verify that LocalStorage doesn't get populated when the component gets initialized with no items", () => {
    const children = <div>Test</div>;
    const component = <LocalStorage>{children}</LocalStorage>;

    const { store } = renderWithProviders(component);

    expect(store.getState().todos.items).toHaveLength(0);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
  });

  it('should verify that LocalStorage does get populated when the component gets initialized with some items', () => {
    const children = <div>Test</div>;
    const component = <LocalStorage>{children}</LocalStorage>;

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

    const { store } = renderWithProviders(component, {
      preloadedState: {
        todos: testInitialState,
      },
    });

    const localStorageSetItemlastCallItem = JSON.parse(
      localStorage.setItem.mock.lastCall.at(1),
    ).at(0);

    expect(localStorageSetItemlastCallItem).toEqual({
      value: expect.stringMatching('Test todo item'),
      id: expect.any(String),
      completed: expect.any(Boolean),
    });

    expect(store.getState().todos.items).toHaveLength(1);
  });

  it('should verify that LocalStorage get populated when a new item is added to the store', () => {
    const children = <div>Test</div>;
    const component = <LocalStorage>{children}</LocalStorage>;

    const { store } = renderWithProviders(component);

    const itemName = 'Test todo item';
    act(() => store.dispatch(addItem(itemName)));

    const localStorageSetItemlastCallItem = JSON.parse(
      localStorage.setItem.mock.lastCall.at(1),
    ).at(0);

    expect(localStorageSetItemlastCallItem).toEqual({
      value: expect.stringMatching(itemName),
      id: expect.any(String),
      completed: expect.any(Boolean),
    });

    expect(store.getState().todos.items).toHaveLength(1);

    const deleteCallTimes = localStorage.removeItem.mock.calls.length;

    const { id } = store.getState().todos.items.at(0);
    act(() => store.dispatch(deleteItem(id)));

    expect(localStorage.removeItem.mock.calls).toHaveLength(
      deleteCallTimes + 1,
    );
    expect(store.getState().todos.items).toHaveLength(0);
  });
});
