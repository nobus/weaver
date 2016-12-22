import React, { Component } from 'react';

class SVGUnselectRect extends Component {
  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <line
          x1={0} y1={0}
          x2={this.props.elementSize} y2={0}
          style={{stroke: 'black', strokeWidth: 1}}
        />
        <line
          x1={0} y1={this.props.elementSize}
          x2={this.props.elementSize} y2={this.props.elementSize}
          style={{stroke: 'black', strokeWidth: 1}}
        />
      </svg>
    );
  }
}

export default SVGUnselectRect;
