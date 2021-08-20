import renderer from 'react-test-renderer';
import Home from '../1-Home';

test('Home route renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
