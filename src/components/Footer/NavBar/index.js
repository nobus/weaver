import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import SetButton from '../SetButton';

class NavBar extends Component {
  render () {
    return (
      <Navbar>
        <Nav>
          <SetButton />
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
