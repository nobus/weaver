import React, { Component } from 'react';

import ThreadingElement from './ThreadingElement';
import '../styles/Scheme4.css';

class ThreadingRow extends Component {
  render() {
    return (
        <span className='spanRow'>
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
        </span>
    );
  }
}

export default ThreadingRow;
