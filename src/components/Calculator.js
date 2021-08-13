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
      display: '0',
      // dataObject: new DataObject(),
    };
    this.dataObject = new DataObject();
  }

  handleClick(key) {
    this.dataObject = Object.assign(this.dataObject, calculate(this.dataObject, key));
    this.setState({
      display:
        `${(this.dataObject.total || this.dataObject.next)
            + (this.dataObject.operation || '')
            + ((this.dataObject.operation && this.dataObject.next) || '')}`,
    });
    console.log(this.dataObject);
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
