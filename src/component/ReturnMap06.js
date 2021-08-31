import React, { Component } from "react";

class ReturnMap06 extends Component {
  render() {
    const elementArray = [<li>React</li>, <li>Start</li>, <li>Basic</li>];

    return <ul>{elementArray.map((arrVal) => arrVal)}</ul>;
  }
}

export default ReturnMap06;
