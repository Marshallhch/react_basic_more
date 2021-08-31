import React, { Component } from "react";

class SetState02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "HTML",
    };
  }

  StateChange = (flag) => {
    if (flag === "direct") this.state.StateString = "Javascript";
    if (flag === "setstate") this.setState({ StateString: "React" });
  };

  render() {
    return (
      <div>
        <button onClick={(e) => this.StateChange("direct", e)}>
          Direct State Change
        </button>
        <button onClick={(e) => this.StateChange("setstate", e)}>
          State Change by setState
        </button>
        <br />
        [State Change] StateString : {this.state.StateString}
      </div>
    );
  }
}

export default SetState02;
