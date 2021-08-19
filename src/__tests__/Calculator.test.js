import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders page correctly', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
