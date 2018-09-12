import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

test('Header gets rendered with a given classname', () => {
  const className = 'test-classname';
  const component = renderer.create(<Header className={className} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props.className).toEqual(className);
});
