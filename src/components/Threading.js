import React, { Component } from 'react';

import ThreadingElement from './ThreadingElement';
import '../styles/Threading.css';
import '../styles/Scheme4.css';

class Threading extends Component {
  render() {
    return (
      <div className='Threading'>
        <span className='spanRow'>
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
        </span>
        <span className='spanRow'>
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
        </span>
        <span className='spanRow'>
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
          <ThreadingElement />
        </span>
      </div>
    );
  }
}

export default Threading;
