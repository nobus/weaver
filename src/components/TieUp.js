import React, { Component } from 'react';

import TieUpElement from './TieUpElement';

import '../styles/TieUp.css';
import '../styles/Scheme4.css';

class TieUp extends Component {
  render() {
    return (
      <div className='TieUp'>
        <span className='spanRow'>
          <TieUpElement />
          <TieUpElement />
          <TieUpElement />
          <TieUpElement />
        </span>
        <span className='spanRow'>
          <TieUpElement />
          <TieUpElement />
          <TieUpElement />
          <TieUpElement />
        </span>
        <span className='spanRow'>
          <TieUpElement />
          <TieUpElement />
          <TieUpElement />
          <TieUpElement />
        </span>
        <span className='spanRow'>
          <TieUpElement />
          <TieUpElement />
          <TieUpElement />
          <TieUpElement />
        </span>
      </div>
    );
  }
}

export default TieUp;
