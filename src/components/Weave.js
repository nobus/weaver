import React, { Component } from 'react';

import WeaveElement from './WeaveElement';
import '../styles/Weave.css';
import '../styles/Scheme4.css';

class Weave extends Component {
  render() {
    const {currentState, onClick, offClick} = this.props;

    const indents = [];
    for (let i = 0; i < 5; i++) {
      indents.push(
        <span className='spanRow' key={i}>
          <WeaveElement currentState={currentState} onClick={onClick} offClick={offClick} />
          <WeaveElement currentState={currentState} onClick={onClick} offClick={offClick} />
          <WeaveElement currentState={currentState} onClick={onClick} offClick={offClick} />
          <WeaveElement currentState={currentState} onClick={onClick} offClick={offClick} />
          <WeaveElement currentState={currentState} onClick={onClick} offClick={offClick} />
        </span>
      );
    }

    return (
      <div className='Weave'>
        {indents}
      </div>
    );
  }
}

export default Weave;
