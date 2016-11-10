import React, { Component } from 'react';
import '../styles/WeaveElement.css';

class WeaveElement extends Component {
  constructor() {
    super();

    this.state = {red: false};
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const style = this.state.red
      ? "WeaveElement redWeaveElement"
      : "WeaveElement whiteWeaveElement";

    return (<div onClick={this.handleClick} className={style}></div>);
  }

  handleClick(e) {
    if (this.state.red) this.setState({'red': false});
    else this.setState({'red': true});
  }
}

export default WeaveElement;
