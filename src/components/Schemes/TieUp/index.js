import React, { Component } from 'react';

import TieUpElement from '../TieUpElement';

import './style.css';
import '../../../styles/index.css';

class TieUp extends Component {
  render() {
    const {currentState, settingsState, onClick, offClick} = this.props;
    const indents = [];

    for (let i = settingsState.threadingSize-1; i >= 0; i--) {
      const rowIndents = [];
      for (let j = 0; j < settingsState.treadlingSize; j++)
        rowIndents.push(<TieUpElement
          currentState={currentState}
          settingsState={settingsState}
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
