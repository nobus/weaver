import React, { Component } from 'react';
import '../styles/TreadlingElement.css';
import '../styles/Scheme4.css';

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
    const style = this.isEnabled()
      ? "TreadlingElement greenTreadlingElement"
      : "TreadlingElement whiteElement";

    return (<div onClick={this.handleClick} className={style}></div>);
  }
}

export default TreadlingElement;
