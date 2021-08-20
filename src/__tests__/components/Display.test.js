import renderer from 'react-test-renderer';
import Display from '../../components/Display';
import DataObject from '../../objects/DataObject';

test('Display renders correctly', () => {
  const dataObject = new DataObject('9', '34', '+');

  const tree = renderer
    .create(
      <Display
        data={{...dataObject}}
      />
    )
    .toJSON();
    
  expect(tree).toMatchSnapshot();
});