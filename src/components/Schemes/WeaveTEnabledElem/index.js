import React, { Component } from 'react';

import './style.css';
import '../../../styles/index.css';

class WeaveTEnabledElem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (<div onClick={this.handleClick} className='weaveTEnabledElement' />);
  }

  handleClick() {
    console.log(`WeaveTEnabledElem  ${this.props.col} ${this.props.row}`);
  }
}

export default WeaveTEnabledElem;
