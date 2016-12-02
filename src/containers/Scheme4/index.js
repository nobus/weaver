import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  weaveOn, weaveOff,
  threadingOn, threadingOff,
  treadlingOn, treadlingOff,
  tieUpOn, tieUpOff
} from '../redux/actions/actions4';

import Threading from './Threading';
import Weave from './Weave';
import TieUp from './TieUp';
import Treadling from './Treadling';
import NavBar from './NavBar';
import SetDialog from './SetDialog';

import '../styles/Scheme4.css';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Scheme4 extends Component {
  render() {
    const {dispatch, switcher4} = this.props;

    return (
      <div>
        <NavBar />

        <div className='container'>
          <SetDialog />

          <div className='Scheme4'>

            <span className='spanRow'>
              <span className='spanCell'>
                <Threading
                  threadingsState={switcher4.threadings}
                  onClick={(row, col) => dispatch(threadingOn(row, col))}
                  offClick={(row, col) => dispatch(threadingOff(row, col))}
                />
              </span>
              <span className='spanCell'>
                <TieUp
                  currentState={switcher4.tieUp}
                  onClick={(row, col) => dispatch(tieUpOn(row, col))}
                  offClick={(row, col) => dispatch(tieUpOff(row, col))}
                />
              </span>
            </span>
            <span className='spanRow'>
              <span className='spanCell'>
                <Weave
                  currentState={switcher4}
                  onClick={(row, col) => dispatch(weaveOn(row, col))}
                  offClick={(row, col) => dispatch(weaveOff(row, col))}
                />
              </span>
              <span className='spanCell'>
                <Treadling
                  treadlingsState={switcher4.treadlings}
                  onClick={(row, col) => dispatch(treadlingOn(row, col))}
                  offClick={(row, col) => dispatch(treadlingOff(row, col))}
                />
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

function select(state) {
  return state;
}

export default connect(select)(Scheme4);
