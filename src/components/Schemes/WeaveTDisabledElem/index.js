import React, { Component } from 'react';

import './style.css';
import '../../../styles/index.css';

class WeaveTDisabledElem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (<div onClick={this.handleClick} className='weaveTDisabledElement' />);
  }

  handleClick() {
    console.log(`WeaveTDisabledElem ${this.props.col} ${this.props.row}`);
  }
}

export default WeaveTDisabledElem;
