import React, { Component } from 'react';
import {Panel, Grid, Row, Col, Button, FormControl} from 'react-bootstrap';

class SetDialog extends Component {
  render() {
    return (
      <Panel header='Settings'>
        <Grid>

          <Row>
            <Col md={2}>Ro</Col>
            <Col md={1}>
              <FormControl type='text' value={16}/>
            </Col>
            <Col md={2}>Ry</Col>
            <Col md={1}>
              <FormControl type='text' value={16}/>
            </Col>
          </Row>

          <Row>
            <Col md={2}>Threading size</Col>
            <Col md={1}>
              <FormControl type='text' value={16}/>
            </Col>
            <Col md={2}>Treadling size</Col>
            <Col md={1}>
              <FormControl type='text' value={16}/>
            </Col>
          </Row>

          <Row>
            <Col md={2}>Element size</Col>
            <Col md={1}>
              <FormControl type='text' value={16}/>
            </Col>
            <Col md={2} />
            <Col md={1} />
          </Row>

          <Row>
            <Col md={2} />
            <Col md={1} />
            <Col md={2} />
            <Col md={1}>
              <Button>OK</Button>
            </Col>
          </Row>

        </Grid>
      </Panel>
    );
  }
}

export default SetDialog;
