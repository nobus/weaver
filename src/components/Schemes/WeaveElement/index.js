import React, { Component } from 'react';
import SVGSelectRect from '../SVGSelectRect';
import SVGUnselectRect from '../SVGUnselectRect';

import './style.css';

class WeaveElement extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  getThreadingNumber() {
    const {col, currentState} = this.props;
    const threadingState = currentState.threadings;

    return (typeof threadingState[col] === 'number' )
      ? threadingState[col]
      : -1;
  }

  getTreadlingNumber() {
    const {row, currentState} = this.props;
    const treadlingState = currentState.treadlings;

    return (typeof treadlingState[row] === 'number' )
      ? treadlingState[row]
      : -1;
  }

  getTieUpState(threadingNum, treadlingNum) {
    if (threadingNum === -1 || treadlingNum === -1) return false;
    const tieUpState = this.props.currentState.tieUp;

    return (tieUpState[threadingNum] && tieUpState[threadingNum][treadlingNum])
      ? true
      : false;
  }

  componentState() {
    return this.getTieUpState(this.getThreadingNumber(), this.getTreadlingNumber());
  }

  render() {
    const elementSize = this.props.currentState.settings.elementSize;
    const style = {width: elementSize + 'px', height: elementSize + 'px'};

    return (
      <div onClick={this.handleClick} className={'WeaveElement'} style={style}>
        {this.componentState()
          ? <SVGSelectRect elementSize={elementSize}/>
          : <SVGUnselectRect elementSize={elementSize}/>
        }
      </div>
    );
  }

  handleClick(e) {
    if (this.componentState()) this.props.offClick(this.props.row, this.props.col);
    else this.props.onClick(this.props.row, this.props.col);
  }
}

export default WeaveElement;
