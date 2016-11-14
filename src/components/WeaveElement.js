import React, { Component } from 'react';
import '../styles/WeaveElement.css';
import '../styles/Scheme4.css';

class WeaveElement extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentState() {
    const {row, col, currentState} = this.props;

    if (currentState.weaves[row]) {
      if (currentState.weaves[row][col] === undefined
        || currentState.weaves[row][col] === false) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  render() {
    const style = this.componentState()
      ? "WeaveElement redWeaveElement"
      : "WeaveElement whiteElement";

    return (<div onClick={this.handleClick} className={style}></div>);
  }

  handleClick(e) {
    if (this.componentState()) this.props.offClick(this.props.row, this.props.col);
    else this.props.onClick(this.props.row, this.props.col);
  }
}

export default WeaveElement;
