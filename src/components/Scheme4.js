import React, { Component } from 'react';
import { connect } from 'react-redux';

import {weaveOn, weaveOff, threadingOn, threadingOff} from '../actions/scheme4';
import Threading from './Threading';
import Weave from './Weave';
import TieUp from './TieUp';
import Treadling from './Treadling';

import '../styles/Scheme4.css';

class Scheme4 extends Component {
  render() {
    const {dispatch, switcher4} = this.props;

    return (
      <div className='Scheme4'>
        <span className='spanRow'>
          <span className='spanCell'>
            <Threading currentState={switcher4} />
          </span>
          <span className='spanCell'><TieUp /></span>
        </span>
        <span className='spanRow'>
          <span className='spanCell'>
            <Weave currentState={switcher4} />
          </span>
          <span className='spanCell'><Treadling /></span>
        </span>
      </div>
    );
  }
}

function select(state) {
  return state;
}

export default connect(select)(Scheme4);
