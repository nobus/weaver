import React, { Component } from 'react';

import TieUpElement from './TieUpElement';

import '../styles/TieUp.css';
import '../styles/Scheme4.css';

class TieUp extends Component {
  render() {
    const {currentState, onClick, offClick} = this.props;
    const indents = [];

    for (let i = 0; i < 4; i++) {
      indents.push(
        <span className='spanRow' key={i}>
          <TieUpElement currentState={currentState} onClick={onClick} offClick={offClick} row={i} col={0} />
          <TieUpElement currentState={currentState} onClick={onClick} offClick={offClick} row={i} col={1} />
          <TieUpElement currentState={currentState} onClick={onClick} offClick={offClick} row={i} col={2} />
          <TieUpElement currentState={currentState} onClick={onClick} offClick={offClick} row={i} col={3} />
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
