import React from 'react';
import PropTypes from 'prop-types';

export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    const className = (value === '0' ? 'span-two-col' : false);

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
