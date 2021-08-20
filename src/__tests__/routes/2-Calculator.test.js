import renderer from 'react-test-renderer';
import Calculator from '../../routes/2-Calculator';

test('Calculator route renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
