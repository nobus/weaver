import React, { Component } from 'react';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SetButton extends Component {
  constructor() {
    super();
    this.state = {enabled: false};
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <button onClick={this.handleClick} className='btn btn-default' type='button'>
        <span className='glyphicon glyphicon-cog' aria-hidden='true'></span>
      </button>
    );
  }

  handleClick(e) {
    if (this.state.enabled) this.setState({enabled: false});
    else this.setState({enabled: true});
  }
}

export default SetButton;
