import React from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  const { value } = props;

  const handleClick = (e) => {
    props.onKeyClick(e.target.innerHTML);
  };

  const getClassName = () => {
    let className;

    if (value === '0') {
      className = 'span-two-col';
    } else if (['/', 'x', '-', '+', '='].indexOf(value) > -1) {
      className = 'bg-orange';
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
