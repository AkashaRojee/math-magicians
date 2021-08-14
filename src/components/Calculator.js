import React, { useState } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';
import calculate from '../logic/calculate';
import DataObject from '../objects/DataObject';

const Calculator = () => {
  const [dataObject, setDataObject] = useState(() => new DataObject());

  const handleClick = (key) => {
    setDataObject((dataObject) => ({ ...dataObject, ...calculate(dataObject, key) }));
  };

  return (
    <div className="calculator">
      <Display data={{ ...dataObject }} />
      <Keyboard onKeyboardClick={(key) => handleClick(key)} />
    </div>
  );
};

export default Calculator;
