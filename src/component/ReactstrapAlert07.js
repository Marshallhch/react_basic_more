import React, { Component } from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

class ReactstrapAlert07 extends Component {
  render() {
    return (
      <div>
        <Alert color='light'>Simple Alert [color : light]</Alert>
        <UncontrolledAlert color='warning'>
          Uncontrolled Alert [color : waring]
        </UncontrolledAlert>
      </div>
    );
  }
}

export default ReactstrapAlert07;
