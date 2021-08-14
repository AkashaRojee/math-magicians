import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const construct = () => {
    const { data: { total, operation, next } } = props;

    return `
      ${(total || next)
      + (operation || '')
      + ((operation && next) || '')}`;
  };

  return (
    <span className="display">
      {construct()}
    </span>
  );
};

Display.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.string,
    operation: PropTypes.string,
    next: PropTypes.string,
  }).isRequired,
};

export default Display;
