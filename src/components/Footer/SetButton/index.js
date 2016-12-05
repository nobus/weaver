import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class SetButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        <Glyphicon glyph='cog' />
      </Button>
    );
  }

  componentState() {
    return this.props.settingState.dialogEnabled;
  }

  handleClick(e) {
    if (this.componentState()) this.props.offClick();
    else this.props.onClick();
  }
}

export default SetButton;
