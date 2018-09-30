import React from 'react';

import { shallow } from 'enzyme';

import Form from './Form';

describe('FormEdit', () => {
  let props;

  beforeEach(() => {
    props = {
      item: '',
      handleAddItem: jest.fn(),
    };
  });

  it('should handle form submission', () => {
    const component = shallow(<Form {...props} />);

    component.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(props.handleAddItem).toHaveBeenCalledWith(props.item);
  });

  it('should handle form submission with a new input field value', () => {
    const value = 'someNewValue';

    const component = shallow(<Form {...props} />);

    component.find('#new-todo-item').simulate('change', { target: { value } });

    expect(component.state('itemValue')).toBe(value);

    component.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(props.handleAddItem).toHaveBeenCalledWith(value);
  });
});
