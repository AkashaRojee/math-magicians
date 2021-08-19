import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
