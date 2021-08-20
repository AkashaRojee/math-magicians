import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../../components/Calculator';

describe('Calculator', () => {
  it('renders page correctly', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  it('accepts inputs and displays the result of "inputs" with expected result: "15.3 / 3 = 5.1"', () => {
    const { getByText } = render(<Calculator />);

    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));

    expect(getByText('5.1')).toBeInTheDocument();
  });
});
