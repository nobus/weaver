import React, { Component } from 'react';
import SVGRectCircle from '../SVGRectCircle';

import './style.css';

class TreadlingElement extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  isEnabled() {
    const {treadlingsState, row, col} = this.props;
    const state = treadlingsState[col];

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
      <div onClick={this.handleClick} className='TreadlingElement' style={style}>
        {this.isEnabled() ? <SVGRectCircle elementSize={elementSize}/> : false}
      </div>
    );
  }
}

export default TreadlingElement;
