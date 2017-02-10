import React, { Component } from 'react';

import WeaveElement from '../WeaveElement';
import './style.css';
import '../../../styles/index.css';

class Weave extends Component {
  render() {
    const {currentState, onClick, offClick} = this.props;

    const indents = [];

    for (let i = 0; i < currentState.settings.ro; i++) {
      const colIndents = [];
      for (let j = 0; j < currentState.settings.ry; j++)
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

    return (
      <div className='Weave' style={style}>
        {indents}
      </div>
    );
  }
}

export default Weave;
