import React, { Component } from 'react';

import TreadlingRow from '../TreadlingRow';

import './style.css';

class Treadling extends Component {
  render() {
    const {treadlingsState, onClick, offClick} = this.props;
    const indents = [];

    for (let i = 0; i < 16; i++) {
      indents.push(<TreadlingRow
          key={i}
          treadlingsState={treadlingsState}
          onClick={onClick}
          offClick={offClick}
          col={i}
        />);
    }

    return (
      <div className='Treadling'>
        {indents}
      </div>
    );
  }
}

export default Treadling;
