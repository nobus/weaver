import React, { Component } from 'react';

import TieUpElement from './TieUpElement';

import '../styles/TieUp.css';
import '../styles/Scheme4.css';

class TieUp extends Component {
  render() {
    const {currentState, onClick, offClick} = this.props;
    const indents = [];

    for (let i = 8; i > 0; i--) {
      const rowIndents = [];
      for (let j = 0; j < 8; j++)
        rowIndents.push(<TieUpElement
          currentState={currentState}
          onClick={onClick}
          offClick={offClick}
          row={i} col={j} key={j}
        />);

      indents.push(
        <span className='spanRow' key={i}>
          {rowIndents}
        </span>
      );
    }

    return (
      <div className='TieUp'>
        {indents}
      </div>
    );
  }
}

export default TieUp;
