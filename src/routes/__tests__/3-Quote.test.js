import renderer from 'react-test-renderer';
import Quote from '../3-Quote';

test('Quote route renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});