import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavigationBar from '../components/NavigationBar';

test('NavigationBar renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
