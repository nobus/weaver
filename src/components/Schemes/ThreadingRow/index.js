import React, { Component } from 'react';

import ThreadingElement from '../ThreadingElement';
import '../../../styles/index.css';

class ThreadingRow extends Component {
  render() {
    const {threadingsState, onClick, offClick, row} = this.props;
    const indents = [];

    for (let i = 0; i < 16; i++) {
      indents.push(<ThreadingElement
        key={i}
        threadingsState={threadingsState}
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
