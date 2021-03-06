import React from 'react';
import PageHeading from '../components/PageHeading';
import CalculatorComp from '../components/Calculator';

const Calculator = () => (
  <main className="calculator-route">
    <PageHeading value="Let's do some math!" />
    <CalculatorComp />
  </main>
);

export default Calculator;
