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
      <button type="button" className={value === '0' ? 'span-two-col' : undefined}>
        {value}
      </button>
    );
  }
}

Key.propTypes = {
  value: PropTypes.string.isRequired,
};
