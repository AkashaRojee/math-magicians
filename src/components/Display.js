import React from 'react';

export default class Display extends React.Component {
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
