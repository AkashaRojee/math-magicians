import renderer from 'react-test-renderer';
import Keyboard from '../Keyboard';

test('Keyboard renders correctly', () => {
  const handleClick = jest.fn();

  const tree = renderer
    .create(<Keyboard onKeyboardClick={() => handleClick()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
