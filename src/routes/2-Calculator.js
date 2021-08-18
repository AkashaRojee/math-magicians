/* eslint-disable */
import React from "react";
import PageHeading from "../components/PageHeading";
import CalculatorComp from "../components/Calculator";

const Calculator = () => {
  
  return (
    <React.Fragment>
      <PageHeading value="Let's do some math!" />
      <CalculatorComp />
    </React.Fragment>
  );
}

export default Calculator;