import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      // total: '',
      // next: '',
      // operation: '',
    };
  }

  handleClick(key) {
    this.setState({
      display: key,
    });
    console.log(key);
  }

  render() {
    const { display } = this.state;

    return (
      <div className="calculator">
        <Display value={display} />
        <Keyboard onKeyboardClick={(key) => this.handleClick(key)} />
      </div>
    );
  }
}

export default Calculator;
