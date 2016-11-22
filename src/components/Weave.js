import React, { Component } from 'react';

import WeaveElement from './WeaveElement';
import '../styles/Weave.css';
import '../styles/Scheme4.css';

class Weave extends Component {
  render() {
    const {currentState, onClick, offClick} = this.props;

    const indents = [];
    for (let i = 0; i < 16; i++) {
      const rowIndents = [];
      for (let j = 0; j < 16; j++)
        rowIndents.push(<WeaveElement
          currentState={currentState}
          onClick={onClick}
          offClick={offClick}
          row={i} col={j}
        />);

      indents.push(
        <span className='spanRow' key={i}>
          {rowIndents}
        </span>
      );
    }

    return (
      <div className='Weave'>
        {indents}
      </div>
    );
  }
}

export default Weave;
