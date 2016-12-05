import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import SetButton from '../SetButton';

class NavBar extends Component {
  render () {
    const {settingState, onClick, offClick} = this.props;

    return (
      <Navbar>
        <Nav>
          <SetButton
            settingState={settingState}
            onClick={onClick}
            offClick={offClick}
          />
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
