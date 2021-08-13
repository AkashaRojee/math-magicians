import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';
import calculate from '../logic/calculate';
import DataObject from '../objects/DataObject';

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

  constructDisplay() {
    const { dataObject } = this.state;
    return `
      ${(dataObject.total || dataObject.next)
      + (dataObject.operation || '')
      + ((dataObject.operation && dataObject.next) || '')}`;
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.constructDisplay()} />
        <Keyboard onKeyboardClick={(key) => this.handleClick(key)} />
      </div>
    );
  }
}

export default Calculator;
