import React, { Component } from 'react';

import './style.css';

class TieUpElement extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentState() {
    const {row, col, currentState} = this.props;

    if (currentState[row]) {
      if (currentState[row][col] === undefined
        || currentState[row][col] === false
        || currentState[row][col] === null) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  render() {
    const elementSize = this.props.settingsState.elementSize;
    const style = {width: elementSize + 'px', height: elementSize + 'px'};

    const styleForInnerDiv = {
      width: elementSize-6 + 'px',
      height: elementSize-6 + 'px',
      border: '1px solid black',
      backgroundColor: 'grey',
      marginTop: '2px',
      marginLeft: '2px'
    };

    return (
      <div onClick={this.handleClick} className='TieUpElement' style={style}>
        {
          this.componentState()
          ? <div style={styleForInnerDiv} />
          : false
        }
      </div>
    );
  }

  handleClick(e) {
    if (this.componentState()) this.props.offClick(this.props.row, this.props.col);
    else this.props.onClick(this.props.row, this.props.col);
  }
}

export default TieUpElement;
