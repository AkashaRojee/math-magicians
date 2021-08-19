import NavigationBar from '../components/NavigationBar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';

test('NavigationBar renders correctly', () => {
  const tree = TestRenderer
    .create(
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});