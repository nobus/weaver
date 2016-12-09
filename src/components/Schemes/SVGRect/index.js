import React, { Component } from 'react';

class SVGRect extends Component {
  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <rect
          width={this.props.elementSize-2}
          height={this.props.elementSize-2}
          fill='grey'
        />
      </svg>
    );
  }
}

export default SVGRect;
