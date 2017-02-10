import React, { Component } from 'react';
import ThreadingsColorElem from '../ThreadingsColorElem';

import './style.css';

class ThreadingsColorBar extends Component {
  render() {
    const indents = [];

    for (let i = 0; i < this.props.ro; i++) {
      indents.push(
        <ThreadingsColorElem elementSize={this.props.elementSize} key={i} />
      )
    }

    return (
      <div className='threadingsColorBar'>
        {indents}
      </div>
    );
  }
}

export default ThreadingsColorBar;
