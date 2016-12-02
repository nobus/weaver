import React, { Component } from 'react';

import ThreadingRow from './ThreadingRow';
import '../styles/Threading.css';

class Threading extends Component {
  /*
  rowNumber(n) {
    return (this.props.currentState.numberOfWeaves <= n)
      ? n
      : this.props.currentState.numberOfWeaves
  }*/

  render() {
    const {threadingsState, onClick, offClick} = this.props;
    const indents = [];

    for (let i = 8; i > /*this.rowNumber(4)*/0; i--) {
      indents.push(<ThreadingRow
          key={i}
          threadingsState={threadingsState}
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
