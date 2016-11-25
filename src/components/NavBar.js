import React, { Component } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">

          <div className="row">

            <div className="col-xs-2">
              <div className="input-group">
                <input type="text" className="form-control" value={16}/>
                <span className="input-group-addon">Weave size</span>
              </div>
            </div>

            <div className="col-xs-2">
              <div className="input-group">
                <input type="text" className="form-control" value={8}/>
                <span className="input-group-addon">Threading size</span>
              </div>
            </div>

            <div className="col-xs-2">
              <div className="input-group">
                <input type="text" className="form-control" value={8}/>
                <span className="input-group-addon">Treadling size</span>
              </div>
            </div>

            <div className="col-xs-1">
              <button className="btn btn-default" type="button">OK</button>
            </div>

          </div>

        </div>
      </nav>
    );
  }
}

export default NavBar;
