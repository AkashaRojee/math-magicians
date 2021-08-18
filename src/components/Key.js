import React from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  const { value } = props;

  const handleClick = (e) => {
    props.onKeyClick(e.target.innerHTML);
  };

  const getClassName = () => {
    let className = 'bg-grape';

    if (value === '0') {
      className += ' span-two-col';
    } else if (['/', 'x', '-', '+', '+/-', '%'].indexOf(value) > -1) {
      className = 'bg-purple-light';
    } else if (value === '=') {
      className = 'bg-cyan';
    } else if (value === 'AC') {
      className = 'bg-purple';
    }

    return className;
  };

  return (
    <button
      type="button"
      className={getClassName()}
      onClick={(e) => handleClick(e)}
    >
      {value}
    </button>
  );
};

Key.propTypes = {
  value: PropTypes.string.isRequired,
  onKeyClick: PropTypes.func.isRequired,
};

export default Key;
