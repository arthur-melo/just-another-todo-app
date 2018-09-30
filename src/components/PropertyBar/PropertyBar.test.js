import React from 'react';

import { mount } from 'enzyme';

import PropertyBar from './PropertyBar';

describe('Checkout', () => {
  let props;

  beforeEach(() => {
    props = {
      id: 'testId',
      handleSelectEditItem: jest.fn(),
      handleDeleteItem: jest.fn(),
    };
  });

  it('should set handleSelectEditItem prop when edit button is clicked', () => {
    const component = mount(<PropertyBar {...props} />);

    component
      .find('.property_bar__button')
      .first()
      .simulate('click');

    expect(props.handleSelectEditItem).toBeCalled();
    expect(props.handleDeleteItem).not.toHaveBeenCalled();
  });

  it('should set handleDeleteItem prop when delete button is clicked', () => {
    const component = mount(<PropertyBar {...props} />);

    component
      .find('.property_bar__button')
      .last()
      .simulate('click');

    expect(props.handleDeleteItem).toBeCalled();
    expect(props.handleSelectEditItem).not.toHaveBeenCalled();
  });
});
