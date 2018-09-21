import React from 'react';

import { shallow, mount } from 'enzyme';

import Content from './Content';
import FormItem from '../FormItem/FormItem';

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
    };
  });

  it('verify if component gets rendered without errors', () => {
    const component = mount(<Content {...props} />);

    expect(component.find(Content)).toHaveLength(1);
  });

  it('verify if todo items list is shown', () => {
    const component = mount(<Content {...props} />);

    const item = {
      value: 'test',
      id: '1',
      completed: false,
    };

    props.items = [...props.items, shallow(<FormItem {...props} item={item} />)];

    expect(
      component
        .find('.content__todos')
        .first()
        .children(),
    ).toHaveLength(1);
  });
});
