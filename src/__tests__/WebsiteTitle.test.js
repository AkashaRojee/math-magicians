import TestRenderer from 'react-test-renderer';
import WebsiteTitle from '../components/WebsiteTitle';

test('WebsiteTitle renders correctly', () => {
  const tree = TestRenderer
    .create(<WebsiteTitle />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});