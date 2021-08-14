import React from 'react';
import PropTypes from 'prop-types';
import Key from './Key';

const Keyboard = (props) => {
  const keyValues = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const handleClick = (keyValue) => {
    props.onKeyboardClick(keyValue);
  };

  return (
    <div className="keyboard">
      {keyValues.map((keyValue) => (
        <Key
          value={keyValue}
          key={keyValue}
          onKeyClick={(keyValue) => handleClick(keyValue)}
        />
      ))}
    </div>
  );
};

Keyboard.propTypes = {
  onKeyboardClick: PropTypes.func.isRequired,
};

export default Keyboard;
