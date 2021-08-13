import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';
import calculate from '../logic/calculate';
import DataObject from '../objects/DataObject';
// import operate from '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObject: new DataObject(),
    };
  }

  handleClick(key) {
    this.setState((state) => ({
      dataObject: { ...state.dataObject, ...calculate(state.dataObject, key) },
    }));
  }

  render() {
    const { dataObject } = this.state;
    const display = `
      ${(dataObject.total || dataObject.next)
      + (dataObject.operation || '')
      + ((dataObject.operation && dataObject.next) || '')}`;

    return (
      <div className="calculator">
        <Display value={display} />
        <Keyboard onKeyboardClick={(key) => this.handleClick(key)} />
      </div>
    );
  }
}

export default Calculator;
