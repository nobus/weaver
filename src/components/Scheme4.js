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
        <span className='spanCell'>
          <Threading />
          <Weave />
        </span>
        <span className='spanCell'>
          <TieUp />
          <Treadling />
        </span>
      </div>
    );
  }
}

export default Scheme4;
