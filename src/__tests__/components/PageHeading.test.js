import renderer from 'react-test-renderer';
import PageHeading from '../../components/PageHeading';

test('PageHeading renders correctly', () => {
  const value = 'Welcome!';
  
  const tree = renderer
    .create(
      <PageHeading
        value={value}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});