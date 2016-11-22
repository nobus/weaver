import React, { Component } from 'react';
import '../styles/TieUpElement.css';
import '../styles/Scheme4.css';

class TieUpElement extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentState() {
    const {row, col, currentState} = this.props;

    if (currentState[row]) {
      if (currentState[row][col] === undefined
        || currentState[row][col] === false) {
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
      ? "WeaveElement greyTieUpElement"
      : "WeaveElement whiteElement";

    return (<div onClick={this.handleClick} className={style}></div>);
  }

  handleClick(e) {
    if (this.componentState()) this.props.offClick(this.props.row, this.props.col);
    else this.props.onClick(this.props.row, this.props.col);
  }
}

export default TieUpElement;
