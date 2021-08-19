import React from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  const { value, className } = props;

  const handleClick = (e) => {
    props.onKeyClick(e.target.innerHTML);
  };

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => handleClick(e)}
    >
      {value}
    </button>
  );
};

Key.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onKeyClick: PropTypes.func.isRequired,
};

export default Key;
