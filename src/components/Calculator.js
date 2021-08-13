import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // total: '',
      // next: '',
      // operation: '',
    };
  }

  handleClick(key) {
    console.log(this);
    console.log(key);
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <Keyboard onKeyboardClick={(key) => this.handleClick(key)} />
      </div>
    );
  }
}

export default Calculator;
