import React, { Component } from 'react';
import {Panel, Grid, Row, Col, Button, FormControl} from 'react-bootstrap';

class SetDialog extends Component {
  constructor() {
    super();
    this.state = {
      ro: '16',
      ry: '16',
      threadingSize: '16',
      treadlingSize: '16',
      elementSize: '16'
    };

    this.handleOkClick = this.handleOkClick.bind(this);
  }

  handleOkClick() {
    console.log('ok!');
  }

  render() {
    return (
      <Panel header='Settings'>
        <Grid>

          <Row>
            <Col md={2}>Ro</Col>
            <Col md={1}>
              <FormControl
                type='text'
                value={this.state.ro}
                onChange={(e) => {this.setState({ro: e.target.value})}} />
            </Col>
            <Col md={2}>Ry</Col>
            <Col md={1}>
              <FormControl
                type='text'
                value={this.state.ry}
                onChange={(e) => {this.setState({ry: e.target.value})}} />
            </Col>
          </Row>

          <Row>
            <Col md={2}>Threading size</Col>
            <Col md={1}>
              <FormControl
                type='text'
                value={this.state.threadingSize}
                onChange={(e) => {this.setState({threadingSize: e.target.value})}} />
            </Col>
            <Col md={2}>Treadling size</Col>
            <Col md={1}>
              <FormControl
                type='text'
                value={this.state.treadlingSize}
                onChange={(e) => {this.setState({treadlingSize: e.target.value})}} />
            </Col>
          </Row>

          <Row>
            <Col md={2}>Element size</Col>
            <Col md={1}>
              <FormControl
                type='text'
                value={this.state.elementSize}
                onChange={(e) => {this.setState({elementSize: e.target.value})}} />
            </Col>
            <Col md={2} />
            <Col md={1} />
          </Row>

          <Row>
            <Col md={2} />
            <Col md={1} />
            <Col md={2} />
            <Col md={1}>
              <Button onClick={this.handleOkClick}>OK</Button>
            </Col>
          </Row>

        </Grid>
      </Panel>
    );
  }
}

export default SetDialog;
