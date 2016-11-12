import React, { Component } from 'react';

import TreadlingElement from './TreadlingElement';

import '../styles/Treadling.css';
import '../styles/Scheme4.css';

class Treadling extends Component {
  render() {
    return (
      <div className='Treadling'>
        <span className='spanRow'>
          <TreadlingElement />
          <TreadlingElement />
          <TreadlingElement />
          <TreadlingElement />
        </span>
        <span className='spanRow'>
          <TreadlingElement />
          <TreadlingElement />
          <TreadlingElement />
          <TreadlingElement />
        </span>
        <span className='spanRow'>
          <TreadlingElement />
          <TreadlingElement />
          <TreadlingElement />
          <TreadlingElement />
        </span>
        <span className='spanRow'>
          <TreadlingElement />
          <TreadlingElement />
          <TreadlingElement />
          <TreadlingElement />
        </span>
        <span className='spanRow'>
          <TreadlingElement />
          <TreadlingElement />
          <TreadlingElement />
          <TreadlingElement />
        </span>
      </div>
    );
  }
}

export default Treadling;
