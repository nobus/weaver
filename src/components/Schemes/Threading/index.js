import React, { Component } from 'react';

import ThreadingRow from '../ThreadingRow';
import './style.css';

class Threading extends Component {
  render() {
    const {threadingsState, settingsState, onClick, offClick} = this.props;
    const indents = [];

    for (
      let i = settingsState.threadingSize-1; i >= 0; i--) {
        indents.push(<ThreadingRow
            key={i}
            threadingsState={threadingsState}
            settingsState={settingsState}
            onClick={onClick}
            offClick={offClick}
            row={i}
          />);
    }

    return (
      <div className='Threading'>
        {indents}
      </div>
    );
  }
}

export default Threading;
