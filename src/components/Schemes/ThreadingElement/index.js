import React, { Component } from 'react';
import SVGRectCircle from '../SVGRectCircle';

import './style.css';

class ThreadingElement extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  isEnabled() {
    const {threadingsState, row, col} = this.props;
    const state = threadingsState[col];

    if (state === undefined) return false;
    else if (state === row) return true;
    else return false;
  }

  handleClick(e) {
    if (this.isEnabled()) this.props.offClick(this.props.row, this.props.col);
    else this.props.onClick(this.props.row, this.props.col);
  }

  render() {
    const elementSize = this.props.settingsState.elementSize;
    const style = {width: elementSize + 'px', height: elementSize + 'px'};

    return (
      <div onClick={this.handleClick} className='ThreadingElement' style={style}>
        {this.isEnabled() ? <SVGRectCircle elementSize={elementSize}/> : false}
      </div>
    );
  }
}

export default ThreadingElement;
