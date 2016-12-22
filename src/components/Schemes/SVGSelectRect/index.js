import React, { Component } from 'react';

class SVGSelectRect extends Component {
  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <rect
          width={this.props.elementSize}
          height={this.props.elementSize}
          fill='grey'
        />
        <line
          x1={1} y1={0}
          x2={1} y2={this.props.elementSize}
          style={{stroke: 'black', strokeWidth: 1}}
        />
        <line
          x1={this.props.elementSize} y1={0}
          x2={this.props.elementSize} y2={this.props.elementSize}
          style={{stroke: 'black', strokeWidth: 1}}
        />
      </svg>
    );
  }
}

export default SVGSelectRect;
