import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  construct() {
    const { data: { total, operation, next } } = this.props;
    return `
      ${(total || next)
      + (operation || '')
      + ((operation && next) || '')}`;
  }

  render() {
    return (
      <span className="display">
        {this.construct()}
      </span>
    );
  }
}

Display.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.string,
    operation: PropTypes.string,
    next: PropTypes.string,
  }).isRequired,
};
