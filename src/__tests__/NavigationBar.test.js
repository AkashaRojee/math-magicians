import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import NavigationBar from '../components/NavigationBar';

test('NavigationBar renders correctly', () => {
  const tree = TestRenderer
    .create(
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
