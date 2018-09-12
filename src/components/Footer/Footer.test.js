import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

test('Footer gets rendered with a given classname', () => {
  const className = 'test-classname';
  const component = renderer.create(<Footer className={className} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props.className).toEqual(className);
});
