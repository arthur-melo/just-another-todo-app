import React from 'react';

import { shallow } from 'enzyme';

import FormItem from './FormItem';
import PropertyBar from '../PropertyBar/PropertyBar';

describe('FormItem', () => {
  let props;

  beforeEach(() => {
    props = {
      item: {
        value: 'someValue',
        id: '0',
        completed: false,
      },
      handleDeleteItem: jest.fn(),
      handleSelectEditItem: jest.fn(),
      handleItemCompletion: jest.fn(),
    };
  });

  it('verify if handleItemCompletion prop is being called', () => {
    const component = shallow(<FormItem {...props} />);

    component
      .find('.form_item__component')
      .children()
      .first()
      .simulate('click');

    expect(props.handleItemCompletion).toHaveBeenCalledWith(props.item);
    expect(props.handleDeleteItem).not.toHaveBeenCalled();
    expect(props.handleSelectEditItem).not.toHaveBeenCalled();
  });

  it('verify if setDisplayMenu updates displayMenu', () => {
    const component = shallow(<FormItem {...props} />);

    expect(component.state('displayMenu')).toBe(false);

    component.instance().setDisplayMenu(true);
    expect(component.state('displayMenu')).toBe(true);
  });

  it('verify if displayMenu instantiates a PropertyBar component', () => {
    const component = shallow(<FormItem {...props} />).update();

    expect(component.state('displayMenu')).toBe(false);
    expect(component.find(PropertyBar).length).toBe(0);

    component.instance().setDisplayMenu(true);
    expect(component.find(PropertyBar).length).toBe(1);
  });

  it('verifies if setDisplayMenu is updated when `mouseMove/mouseLeave` events are called', () => {
    const component = shallow(<FormItem {...props} />);

    component.find('.form_item__component').simulate('mouseMove');
    expect(component.state('displayMenu')).toBe(true);

    component.find('.form_item__component').simulate('mouseLeave');
    expect(component.state('displayMenu')).toBe(false);
  });
});
