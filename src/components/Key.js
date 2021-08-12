import React from 'react';
import PropTypes from 'prop-types';

export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;

    return (
      <span>{value}</span>
    );
  }
}

Key.propTypes = {
  value: PropTypes.string.isRequired,
};
