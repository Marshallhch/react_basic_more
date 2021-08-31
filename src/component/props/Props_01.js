import React, { Component } from "react";

class Props_01 extends Component {
  render() {
    let props_value = this.props.props_val;
    props_value += " from App.js";
    return <div>{props_value}</div>;
  }
}

export default Props_01;
