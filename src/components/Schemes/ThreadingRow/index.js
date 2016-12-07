import React, { Component } from 'react';

import ThreadingElement from '../ThreadingElement';
import '../../../styles/index.css';

class ThreadingRow extends Component {
  render() {
    const {threadingsState, settingsState, onClick, offClick, row} = this.props;
    const indents = [];

    for (let i = 0; i < (settingsState.ro ? settingsState.ro : 16); i++) {
      indents.push(<ThreadingElement
        key={i}
        threadingsState={threadingsState}
        settingsState={settingsState}
        onClick={onClick}
        offClick={offClick}
        row={row}
        col={i}
      />);
    }

    return (
        <span className='spanRow'>
          {indents}
        </span>
    );
  }
}

export default ThreadingRow;
