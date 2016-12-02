import React, { Component } from 'react';
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
    const style = this.isEnabled()
      ? "ThreadingElement blueThreadingElement"
      : "ThreadingElement whiteElement";

    return (<div onClick={this.handleClick} className={style}></div>);
  }
}

export default ThreadingElement;
