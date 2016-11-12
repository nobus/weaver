import React, { Component } from 'react';

import ThreadingRow from './ThreadingRow';
import '../styles/Threading.css';

class Threading extends Component {
  rowNumber(n) {
    return (this.props.currentState.weaves.length <= n)
      ? n
      : this.props.currentState.weaves.length
  }

  render() {
    const indents = [];

    for (let i = 0; i < this.rowNumber(4); i++) {
      indents.push(<ThreadingRow key={i}/>);
    }

    return (
      <div className='Threading'>
        {indents}
      </div>
    );
  }
}

export default Threading;
