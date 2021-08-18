/* eslint-disable */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Key from './Key';
import KeyStyle from '../objects/KeyStyle';

const Keyboard = (props) => {
  const keyStyles = {
    clear: 'bg-purple',
    symbol: 'bg-purple-light',
    number: 'bg-purple-dark',
    equal: 'bg-cyan',
  };

  const keyValues = [
    new KeyStyle('AC', keyStyles.clear),
    new KeyStyle('+/-', keyStyles.symbol),
    new KeyStyle('%', keyStyles.symbol),
    new KeyStyle('/', keyStyles.symbol),
    new KeyStyle('7', keyStyles.number),
    new KeyStyle('8', keyStyles.number),
    new KeyStyle('9', keyStyles.number),
    new KeyStyle('x', keyStyles.symbol),
    new KeyStyle('4', keyStyles.number),
    new KeyStyle('5', keyStyles.number),
    new KeyStyle('6', keyStyles.number),
    new KeyStyle('-', keyStyles.symbol),
    new KeyStyle('1', keyStyles.number),
    new KeyStyle('2', keyStyles.number),
    new KeyStyle('3', keyStyles.number),
    new KeyStyle('+', keyStyles.symbol),
    new KeyStyle('0', `span-two-col ${keyStyles.number}`),
    new KeyStyle('.', keyStyles.number),
    new KeyStyle('=', keyStyles.equal),
  ];

  const handleClick = (keyValue) => {
    props.onKeyboardClick(keyValue);
  };

  const renderOutput = useMemo(() => (
    <div className="keyboard">
      {keyValues.map(({keyValue, className}) => (
        <Key
          value={keyValue}
          key={keyValue}
          className={className}
          onKeyClick={(keyValue) => handleClick(keyValue)}
        />
      ))}
    </div>
  ));

  return renderOutput;
};

Keyboard.propTypes = {
  onKeyboardClick: PropTypes.func.isRequired,
};

export default Keyboard;
