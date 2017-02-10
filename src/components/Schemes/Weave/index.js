import React, { Component } from 'react';

import WeaveElement from '../WeaveElement';
import './style.css';
import '../../../styles/index.css';

class Weave extends Component {
  render() {
    const {currentState, onClick, offClick} = this.props;

    const indents = [];

    for (let i = 0; i < (currentState.settings.ro ? currentState.settings.ro : 16); i++) {
      const colIndents = [];
      for (let j = 0; j < (currentState.settings.ry ? currentState.settings.ry : 16); j++)
        colIndents.push(<WeaveElement
          currentState={currentState}
          onClick={onClick}
          offClick={offClick}
          row={j} col={i} key={j}
        />);

      indents.push(
        <div className='column' key={i}>
          {colIndents}
        </div>
      );
    }

    const elementSize = parseInt(currentState.settings.elementSize, 10);

    const style = {
      width: (currentState.settings.ro * elementSize) + 2,
      height: (currentState.settings.ry * elementSize) + 2
    };

    console.log(style);

    return (
      <div className='Weave' style={style}>
        {indents}
      </div>
    );
  }
}

export default Weave;
