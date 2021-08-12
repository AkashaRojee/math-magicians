import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;

    let className;
    if (value === '0') {
      className = 'span-two-col';
    } else if (['/', 'x', '-', '+', '='].indexOf(value) > -1) {
      className = 'bg-orange';
    }

    return (
      <button type="button" className={className}>
        {value}
      </button>
    );
  }
}

Key.propTypes = {
  value: PropTypes.string.isRequired,
};
