import React, { Component } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SetButton extends Component {
  render () {
    return (
      <button className='btn btn-default' type='button'>
        <span className='glyphicon glyphicon-cog' aria-hidden='true'></span>
      </button>
    );
  }
}

export default SetButton;
