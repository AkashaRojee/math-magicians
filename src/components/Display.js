import React, { Component } from 'react';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span className="display">
        0
      </span>
    );
  }
}
