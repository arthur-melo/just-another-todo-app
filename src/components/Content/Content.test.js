import React from 'react';

import { shallow, mount } from 'enzyme';

import Content from './Content';
import FormItem from '../FormItem/FormItem';
import FormEdit from '../FormEdit/FormEdit';

describe('Content', () => {
  let props;

  beforeEach(() => {
    props = {
      items: [],
      editingItem: {},
      className: 'content',
      handleAddItem: jest.fn(),
      handleCancelEditItem: jest.fn(),
      handleDeleteItem: jest.fn(),
      handleEditItem: jest.fn(),
      handleItemCompletion: jest.fn(),
      handleSelectEditItem: jest.fn(),
      handleReorderItem: jest.fn(),
    };
  });

  it('should show a todo items list', () => {
    const component = mount(<Content {...props} />);

    // Initial render
    expect(
      component
        .find('.content__todos')
        .first()
        .children(),
    ).toHaveLength(0);

    const item = {
      value: 'test',
      id: '1',
      completed: false,
    };

    props.items = [...props.items, shallow(<FormItem {...props} item={item} />)];

    expect(component.find(FormItem)).toBeDefined();
  });

  it('should show an editing item form when an item is selected', () => {
    const component = mount(<Content {...props} />);

    const item = {
      value: 'test',
      id: '1',
      completed: false,
    };

    props.items = [...props.items, shallow(<FormItem {...props} item={item} />)];
    props.editingItem = { ...props.editingItem, item };

    expect(component.find(FormEdit)).toBeDefined();
  });

  it('should call handleReorderItem prop on dragEnd', () => {
    const component = mount(<Content {...props} />);

    const action = {
      source: {
        index: 0,
      },
      destination: {
        index: 1,
      },
    };

    expect(component.instance().onDragEnd({})).toBeUndefined();

    component.instance().onDragEnd(action);
    expect(props.handleReorderItem).toBeCalledWith(0, 1);
  });
});
