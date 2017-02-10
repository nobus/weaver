import React, { Component } from 'react';

import ColorPicker from '../ColorPicker';
import './style.css';

class ThreadingsColorElem extends Component {
  constructor () {
    super();

    this.state = {showModal: false};
    this.close = this.close.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className='threadingsColorElem'
        style={{
          width: this.props.elementSize + 'px',
          height: this.props.elementSize + 'px'
        }}>
        <ColorPicker
          showModal={this.state.showModal}
          close={this.close}
          saveChanges={this.saveChanges}
        />
      </div>
    );
  }

  handleClick(e) {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  saveChanges() {
    this.setState({ showModal: false });
  }
}

export default ThreadingsColorElem;
