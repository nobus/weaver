import React, { Component } from 'react';

import ThreadingRow from './ThreadingRow';
import '../styles/Threading.css';

class Threading extends Component {
  render() {
    return (
      <div className='Threading'>
        <ThreadingRow />
        <ThreadingRow />
        <ThreadingRow />
        <ThreadingRow />
      </div>
    );
  }
}

export default Threading;
