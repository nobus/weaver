import React, { Component } from 'react';

import Threading from './Threading';
import Weave from './Weave';
import TieUp from './TieUp';
import Treadling from './Treadling';

import '../styles/Scheme4.css';

class Scheme4 extends Component {
  render() {
    return (
      <div className='Scheme4'>
        <span className='spanRow'>
          <span className='spanCell'><Threading /></span>
          <span className='spanCell'><TieUp /></span>
        </span>
        <span className='spanRow'>
          <span className='spanCell'><Weave /></span>
          <span className='spanCell'><Treadling /></span>
        </span>
      </div>
    );
  }
}

export default Scheme4;
