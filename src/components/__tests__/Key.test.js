import renderer from 'react-test-renderer';
import Key from '../Key';

test('Key renders correctly', () => {
  const value = '6';
  const className = 'bg-purple-light'
  const handleClick = jest.fn();

  const tree = renderer
    .create(
      <Key
        value={value}
        className={className}
        onKeyClick={() => handleClick()}
      />
    )
    .toJSON();
    
  expect(tree).toMatchSnapshot();
});