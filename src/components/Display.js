import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;

    return (
      <span className="display">
        {value}
      </span>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};
