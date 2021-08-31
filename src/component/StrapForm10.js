import React, { Component } from "react";
import { Form, Label, Input, Row, Col, FormGroup } from "reactstrap";

class StrapForm10 extends Component {
  render() {
    return (
      <div>
        <Form>
          <Label for='exampleGender'>Gender</Label>
          <Input type='select' bsSize='sm'>
            <option>no select</option>
            <option>woman</option>
            <option>man</option>
          </Input>
          <Row form>
            <Col md={6}>
              <Label for='exampleAddress'>Address</Label>
              <Input type='text' name='address' id='address' />
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for='exampleMobile'>Mobile</Label>
                <Input type='text' name='mobile' id='mobile' />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default StrapForm10;
