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

  it('verify if handleSelectEditItem prop is being called', () => {
    const component = mount(<PropertyBar {...props} />);

    component
      .find('.property_bar__button')
      .first()
      .simulate('click');

    expect(props.handleSelectEditItem).toBeCalled();
    expect(props.handleDeleteItem).not.toHaveBeenCalled();
  });

  it('verify if handleDeleteItem prop is being called', () => {
    const component = mount(<PropertyBar {...props} />);

    component
      .find('.property_bar__button')
      .last()
      .simulate('click');

    expect(props.handleDeleteItem).toBeCalled();
    expect(props.handleSelectEditItem).not.toHaveBeenCalled();
  });

  it('verify if handleSelectEditItem prop is being called with a given id', () => {
    const id = 'someOtherId';

    const component = mount(<PropertyBar {...props} id={id} />);
    component
      .find('.property_bar__button')
      .first()
      .simulate('click');

    expect(props.handleSelectEditItem).toBeCalledWith('someOtherId');
    expect(props.handleDeleteItem).not.toHaveBeenCalled();
  });

  it('verify if handleDeleteItem prop is being called with a given id', () => {
    const id = 'someOtherId';

    const component = mount(<PropertyBar {...props} id={id} />);
    component
      .find('.property_bar__button')
      .last()
      .simulate('click');

    expect(props.handleDeleteItem).toBeCalledWith('someOtherId');
    expect(props.handleSelectEditItem).not.toHaveBeenCalled();
  });
});
