import React, { Component } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
  render () {
    return (
      <nav className="navbar-form navbar-static-top">
      <div class="container-fluid">
        <div className="form-group">
          <a className="navbar-brand" href="#">Weaver</a>
        </div>
        <button type="submit" className="btn btn-default">Save</button>
      </div>
      </nav>
    );
  }
}

export default NavBar;
