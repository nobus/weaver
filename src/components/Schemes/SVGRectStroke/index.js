import React, { Component } from 'react';

class SVGRectStroke extends Component {
  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <rect
          x={2}
          y={2}
          width={this.props.elementSize-6}
          height={this.props.elementSize-6}
          fill='grey'
          stroke='black'
          strokeWidth={1}
        />
      </svg>
    );
  }
}

export default SVGRectStroke;
