import React, { Component } from 'react';

import './style.css';
import '../../../styles/index.css';

class WeaveTElement extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.props.enabled) {
      return (<div onClick={this.handleClick} className='weaveTEnabledElement' />);
    }

    return (<div onClick={this.handleClick} className='weaveTDisabledElement' />);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.enabled !== nextProps.enabled) return true;
    return false;
  }

  handleClick() {
    console.log(`WeaveTElement  ${this.props.col} ${this.props.row}`);
  }
}

export default WeaveTElement;
