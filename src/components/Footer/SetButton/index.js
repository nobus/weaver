import React, { Component } from 'react';
import { Modal, Grid, Row, Col, Button, FormControl, Glyphicon } from 'react-bootstrap';

class SetButton extends Component {
  constructor() {
    super();

    this.state = {showModal: false};
    this.handleClick = this.handleClick.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.close = this.close.bind(this);
  }

  initialLocalState() {
    const {settingsState} = this.props;

    this.state = {
      showModal: false,
      ro: settingsState.ro ? settingsState.ro : 16,
      ry: settingsState.ry ? settingsState.ro : 16,
      threadingSize: settingsState.threadingSize ? settingsState.threadingSize : 8,
      treadlingSize: settingsState.treadlingSize ? settingsState.treadlingSize : 8,
      elementSize: settingsState.elementSize ? settingsState.elementSize : 10
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
              onClick={this.saveChanges}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  handleClick(e) {
    this.initialLocalState();
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
    this.initialLocalState();
  }

  saveChanges() {
    this.setState({ showModal: false });
    this.props.saveSettings({
      ro: this.state.ro,
      ry: this.state.ry,
      threadingSize: this.state.threadingSize,
      treadlingSize: this.state.treadlingSize,
      elementSize: this.state.elementSize
    });
  }
}

export default SetButton;
