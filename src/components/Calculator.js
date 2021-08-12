import React from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <Keyboard />
      </div>
    );
  }
}

export default Calculator;
