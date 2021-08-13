import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Key from './Key';

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(key) {
    const { props } = this;
    props.onKeyboardClick(key);
  }

  render() {
    const keyValues = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    return (
      <div className="keyboard">
        {keyValues.map((key) => (
          <Key
            value={key}
            key={key}
            onKeyClick={(key) => this.handleClick(key)}
          />
        ))}
      </div>
    );
  }
}

Keyboard.propTypes = {
  onKeyboardClick: PropTypes.func.isRequired,
};
