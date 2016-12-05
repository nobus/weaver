import React, { Component } from 'react';
import { Modal, Grid, Row, Col, Button, FormControl, Glyphicon } from 'react-bootstrap';

class SetButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      showModal: false,
      ro: '16',
      ry: '16',
      threadingSize: '16',
      treadlingSize: '16',
      elementSize: '16'
    };
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>
          <Glyphicon glyph='cog' />
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Settings</Modal.Title>
          </Modal.Header>

          <Modal.Body>
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
            </Grid>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button
              bsStyle="primary"
              onClick={this.close}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  componentState() {
    return this.props.settingState.dialogEnabled;
  }

  handleClick(e) {
    this.setState({ showModal: true });

    if (this.componentState()) this.props.offClick();
    else this.props.onClick();
  }

  close() {
    console.log('close!!!');
    this.setState({ showModal: false });
  }
}

export default SetButton;
