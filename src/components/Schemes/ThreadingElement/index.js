import React, { Component } from 'react';

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

    const styleForInnerCircle = {
      width: elementSize-4 + 'px',
      height: elementSize-4 + 'px',
      borderRadius: elementSize/2 + 'px',
      border: '1px solid black',
      backgroundColor: 'grey',
      marginTop: '1px',
      marginLeft: '1px'
    };

    return (
      <div onClick={this.handleClick} className='ThreadingElement' style={style}>
        {
          this.isEnabled()
            ? <div style={styleForInnerCircle}/>
            : false
          }
      </div>
    );
  }
}

export default ThreadingElement;
