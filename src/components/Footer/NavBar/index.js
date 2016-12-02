import React, { Component } from 'react';

import SetButton from './SetButton';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
  render () {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='container-fluid'>
          <SetButton />
        </div>
      </nav>
    );
  }
}

export default NavBar;
