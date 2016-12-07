import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

import {
  weaveOn, weaveOff,
  threadingOn, threadingOff,
  treadlingOn, treadlingOff,
  tieUpOn, tieUpOff,
  saveSettings
} from '../../redux/actions/actions4';

import Threading from '../../components/Schemes/Threading';
import Weave from '../../components/Schemes/Weave';
import TieUp from '../../components/Schemes/TieUp';
import Treadling from '../../components/Schemes/Treadling';

import NavBar from '../../components/Footer/NavBar';

import './style.css';
import '../../styles/index.css';

class Scheme4 extends Component {
  render() {
    const {dispatch, switcher4} = this.props;

    return (
      <div>
        <NavBar
          settingsState={switcher4.settings}
          saveSettings={(settings) => dispatch(saveSettings(settings))}
        />

        <Grid>
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

        </Grid>

      </div>
    );
  }
}

function select(state) {
  return state;
}

export default connect(select)(Scheme4);
