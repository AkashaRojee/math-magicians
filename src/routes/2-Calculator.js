/* eslint-disable */
import React from "react";
import PageHeading from "../components/PageHeading";
import CalculatorComp from "../components/Calculator";

const Calculator = () => {
  
  return (
    <main className="calculator-route">
      <PageHeading value="Let's do some math!" />
      <CalculatorComp />
    </main>
  );
}

export default Calculator;