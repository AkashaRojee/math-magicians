import renderer from 'react-test-renderer';
import WebsiteTitle from '../WebsiteTitle';

test('WebsiteTitle renders correctly', () => {
  const tree = renderer
    .create(<WebsiteTitle />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});