import React, { Component } from "react";

class ComponentClass03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react", { react: "200" }],
    };
  }

  buttonClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "react String" });
    } else {
      this.setState({ StateArrayObj: ["react Object", { react: "200" }] });
    }
  };

  render() {
    console.log("render() Activate");
    return (
      <div>
        <button onClick={(e) => this.buttonClick("string", e)}>
          Change String
        </button>
        <button onClick={(e) => this.buttonClick("ArrayObject", e)}>
          Change Object
        </button>
        <p>{this.state.StateString}</p>
      </div>
    );
  }
}

export default ComponentClass03;
