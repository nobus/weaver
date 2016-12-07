import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import SetButton from '../SetButton';

class NavBar extends Component {
  render () {
    const {settingsState, saveSettings} = this.props;

    return (
      <Navbar>
        <Nav>
          <SetButton
            settingsState={settingsState}
            saveSettings={saveSettings}
          />
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
