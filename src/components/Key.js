/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  const { value } = props;

  const handleClick = (e) => {
    props.onKeyClick(e.target.innerHTML);
  };

  return (
    <button
      type="button"
      className={props.className}
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
