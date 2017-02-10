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

    const elementSize = parseInt(switcher4.settings.elementSize, 10);
    const ro = parseInt(switcher4.settings.ro, 10);
    const ry = parseInt(switcher4.settings.ry, 10);
    const threadingSize = parseInt(switcher4.settings.threadingSize, 10);
    const treadlingSize = parseInt(switcher4.settings.treadlingSize, 10);

    const width = elementSize * (ro + treadlingSize + 2);
    const height = elementSize * (ry + threadingSize + 2);

    return (
      <div>
        <NavBar
          settingsState={switcher4.settings}
          saveSettings={(settings) => dispatch(saveSettings(settings))}
        />

        <Grid fluid={true}>
          <div className='Scheme4' style={{width: `${width}px`, height: `${height}px`}}>

            <div className='column'>
              <TieUp
                currentState={switcher4.tieUp}
                settingsState={switcher4.settings}
                onClick={(row, col) => dispatch(tieUpOn(row, col))}
                offClick={(row, col) => dispatch(tieUpOff(row, col))}
              />
              <Treadling
                treadlingsState={switcher4.treadlings}
                settingsState={switcher4.settings}
                onClick={(row, col) => dispatch(treadlingOn(row, col))}
                offClick={(row, col) => dispatch(treadlingOff(row, col))}
              />
            </div>

            <div>
              <Threading
                threadingsState={switcher4.threadings}
                settingsState={switcher4.settings}
                onClick={(row, col) => dispatch(threadingOn(row, col))}
                offClick={(row, col) => dispatch(threadingOff(row, col))}
              />
              <Weave
                currentState={switcher4}
                onClick={(row, col) => dispatch(weaveOn(row, col))}
                offClick={(row, col) => dispatch(weaveOff(row, col))}
              />
            </div>

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
