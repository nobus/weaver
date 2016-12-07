import React, { Component } from 'react';

import TreadlingElement from '../TreadlingElement';
import '../../../styles/index.css';

class TreadlingRow extends Component {
  render() {
    const {treadlingsState, settingsState, onClick, offClick, col} = this.props;
    const indents = [];

    for (let i = 0; i < (settingsState.treadlingSize ? settingsState.treadlingSize : 8); i++) {
      indents.push(<TreadlingElement
        key={i}
        treadlingsState={treadlingsState}
        settingsState={settingsState}
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
