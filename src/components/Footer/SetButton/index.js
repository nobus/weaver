import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class SetButton extends Component {
  constructor() {
    super();
    this.state = {enabled: false};
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        <Glyphicon glyph='cog' />
      </Button>
    );
  }

  handleClick(e) {
    if (this.state.enabled) this.setState({enabled: false});
    else this.setState({enabled: true});
  }
}

export default SetButton;
