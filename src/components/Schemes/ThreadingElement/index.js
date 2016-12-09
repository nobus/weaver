import React, { Component } from 'react';
import SVGRect from '../SVGRect';

import './style.css';
import '../../../styles/index.css';

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
    const className = this.isEnabled()
      ? "ThreadingElement blueThreadingElement"
      : "ThreadingElement whiteElement";

    const elementSize = this.props.settingsState.elementSize;
    const style = {width: elementSize + 'px', height: elementSize + 'px'};

    return (
      <div onClick={this.handleClick} className={className} style={style}>
        {this.isEnabled() ? <SVGRect elementSize={elementSize}/> : false}
      </div>
    );
  }
}

export default ThreadingElement;
