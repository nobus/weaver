import React, { Component } from 'react';

import WeaveElement from './WeaveElement';
import '../styles/Weave.css';
import '../styles/Scheme4.css';

class Weave extends Component {
  render() {
    return (
      <div className='Weave'>
        <span className='spanRow'>
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
        </span>
        <span className='spanRow'>
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
        </span>
        <span className='spanRow'>
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
        </span>
        <span className='spanRow'>
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
        </span>
        <span className='spanRow'>
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
          <WeaveElement />
        </span>
      </div>
    );
  }
}

export default Weave;
