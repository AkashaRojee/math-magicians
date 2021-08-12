import React from 'react';
import Key from './Key';

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const keyValues = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    return (
      <div className="keyboard">
        {keyValues.map((key) => <Key value={key} key={key} />)}
      </div>
    );
  }
}
