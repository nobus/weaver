import React, { Component } from 'react';
import '../styles/WeaveElement.css';

class WeaveElement extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentState() {
    const row = this.props.row;
    const col = this.props.col;
    const weaves = this.props.currentState.weaves;

    if (weaves[row]) {
      if (weaves[row][col] === undefined || weaves[row][col] === false) {
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
      : "WeaveElement whiteWeaveElement";

    return (<div onClick={this.handleClick} className={style}></div>);
  }

  handleClick(e) {
    if (this.componentState()) this.props.offClick(this.props.row, this.props.col);
    else this.props.onClick(this.props.row, this.props.col);
  }
}

export default WeaveElement;
