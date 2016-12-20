import React, { Component } from 'react';

class SVGRectCircle extends Component {
  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <circle
          cx={this.props.elementSize/2 - 1}
          cy={this.props.elementSize/2 - 1}
          r={this.props.elementSize/2 - 3}
          fill='grey'
          stroke='black'
          strokeWidth={1}
        />
      </svg>
    );
  }
}

export default SVGRectCircle;
