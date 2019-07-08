import React from 'react';

import { fireEvent } from '@testing-library/react';

import { renderWithRedux } from '../testHelpers';
import { LOCALSTORAGE_NAME } from '../constants';

import App from './App';

describe('App', () => {
  let props;

  beforeEach(() => {
    props = {
      handleLoadStateLocalStorage: jest.fn(),
      handleSaveStateLocalStorage: jest.fn(),
    };
  });

  it('should render the App component', () => {
    const { container } = renderWithRedux(<App {...props} />);

    expect(container.firstChild).toBeDefined();
  });

  it('should call handleLoadStateLocalStorage', () => {
    localStorage.setItem(LOCALSTORAGE_NAME, '[{"value":"load","id":"id","completed":false}]');

    const { getByText } = renderWithRedux(<App {...props} />);

    expect(getByText('load')).toBeDefined();
  });

  it('should call handleSaveStateLocalStorage', () => {
    const { getByPlaceholderText, getByTestId, getByText } = renderWithRedux(<App {...props} />);

    // Add a new item
    const input = getByPlaceholderText('I want to do...');
    const submitButton = getByTestId('form-submit');

    fireEvent.change(input, { target: { value: 'save' } });
    fireEvent.click(submitButton);

    // Item should be defined
    expect(getByText('save')).toBeDefined();
  });
});
