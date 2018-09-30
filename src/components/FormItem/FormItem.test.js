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

  it('should set handleItemCompletion prop when an item is clicked', () => {
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

  it('should show a PropertyBar component when displayMenu is set', () => {
    const component = shallow(<FormItem {...props} />).update();

    expect(component.state('displayMenu')).toBe(false);
    expect(component.find(PropertyBar).length).toBe(0);

    component.instance().setDisplayMenu(true);
    expect(component.find(PropertyBar).length).toBe(1);
  });

  it('should set displayMenu prop when `mouseMove/mouseLeave` events are fired', () => {
    const component = shallow(<FormItem {...props} />);

    component.find('.form_item__component').simulate('mouseMove');
    expect(component.state('displayMenu')).toBe(true);

    component.find('.form_item__component').simulate('mouseLeave');
    expect(component.state('displayMenu')).toBe(false);
  });
});
