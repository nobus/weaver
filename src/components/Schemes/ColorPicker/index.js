import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { Modal, Button } from 'react-bootstrap';

class ColorPicker extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Header>
          <Modal.Title>Color picker</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SketchPicker />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.close}>Close</Button>
          <Button
            bsStyle="primary"
            onClick={this.props.saveChanges}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ColorPicker;
