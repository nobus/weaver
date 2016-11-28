import React, { Component } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SetDialog extends Component {
  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>Settings</div>
        <div className='panel-body'>

          <div className='row'>
            <div className='col-md-1'>Ro</div>
            <div className='col-md-1'>
              <input type='text' className='form-control' value={16}/>
            </div>
            <div className='col-md-1'>Ry</div>
            <div className='col-md-1'>
              <input type='text' className='form-control' value={16}/>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-1'>Threading size</div>
            <div className='col-md-1'>
              <input type='text' className='form-control' value={16}/>
            </div>
            <div className='col-md-1'>Treadling size</div>
            <div className='col-md-1'>
              <input type='text' className='form-control' value={16}/>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-1'>Element size</div>
            <div className='col-md-1'>
              <input type='text' className='form-control' value={16}/>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-1'></div>
          </div>

          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-1'></div>
            <div className='col-md-1'>
              <button className='btn btn-default' type='button'>Cansel</button>
            </div>
            <div className='col-md-1'>
              <button className='btn btn-default' type='button'>OK</button>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default SetDialog;