import React from 'react';

import { mount } from 'enzyme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import Checkout from './Checkout';

describe('Checkout', () => {
  it('renders a checkmark icon when received prop is true', () => {
    const completed = true;

    const component = mount(<Checkout isCompleted={completed} />);

    expect(component.find(FontAwesomeIcon).props().icon).toBe(faCheckSquare);
  });

  it('renders a square icon when received prop is false', () => {
    const completed = false;

    const component = mount(<Checkout isCompleted={completed} />);

    expect(component.find(FontAwesomeIcon).props().icon).toBe(faSquare);
  });
});
