import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(e) {
    const { props } = this;
    props.onKeyClick(e.target.innerHTML);
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
      <button type="button" className={className} onClick={(e) => this.handleClick(e)}>
        {value}
      </button>
    );
  }
}

Key.propTypes = {
  value: PropTypes.string.isRequired,
  onKeyClick: PropTypes.func.isRequired,
};
