import TestRenderer from 'react-test-renderer';
import Keyboard from '../components/Keyboard';

test('Keyboard renders correctly', () => {
  const handleClick = jest.fn();

  const tree = TestRenderer
    .create(<Keyboard onKeyboardClick={() => handleClick()} />)
    .toJSON();
    
  expect(tree).toMatchSnapshot();
});