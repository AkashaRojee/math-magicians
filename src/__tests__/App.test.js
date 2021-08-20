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

describe('Clicking on links in navigation bar displays correct route in App', () => {

  beforeEach(() => {
    render(<App />);
  });

  test('Clicking on Home link displays home', () => {
    const homeLink = screen.getByText('Home');
  
    userEvent.click(homeLink);
    const welcomeText = screen.getByText('Welcome to our page!');
    
    expect(welcomeText).toBeVisible();
  });
  
  test('Clicking on Calculator link displays calculator', () => {
    const calculatorLink = screen.getByText('Calculator');
  
    userEvent.click(calculatorLink);
    const calculatorButtons = screen.getAllByRole('button');
    
    calculatorButtons.forEach((calculatorButton) => {
      expect(calculatorButton).toBeVisible();
    });
  });

  test('Clicking on Quote link displays quote', () => {
    const quoteLink = screen.getByText('Quote');
  
    userEvent.click(quoteLink);
    const quote = screen.getByText(
      'Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. - William Paul Thurston'
    );
    
    expect(quote).toBeVisible();
  });
});