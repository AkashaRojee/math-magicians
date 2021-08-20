import renderer from 'react-test-renderer';
import App from '../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});

test('Clicking on Calculator link in navigation bar displays calculator in App', () => {
  render(<App />);
  const calculatorLink = screen.getByText('Calculator');

  userEvent.click(calculatorLink);
  const calculatorButtons = screen.getAllByRole('button');
  
  calculatorButtons.forEach((calculatorButton) => {
    expect(calculatorButton).toBeVisible();
  });
});