import React, { Component } from 'react';

import TreadlingElement from './TreadlingElement';
import '../styles/Scheme4.css';

class TreadlingRow extends Component {
  render() {
    const {treadlingsState, onClick, offClick, col} = this.props;
    const indents = [];

    for (let i = 0; i < 4; i++) {
      indents.push(<TreadlingElement
        key={i}
        treadlingsState={treadlingsState}
        onClick={onClick}
        offClick={offClick}
        row={i}
        col={col}
      />);
    }

    return (
      <span className='spanRow'>
        {indents}
      </span>
    );
  }
}

export default TreadlingRow;
