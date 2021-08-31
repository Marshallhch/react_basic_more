import React, { Component } from "react";

class CallbackFunction14 extends Component {
  componentDidMount() {
    this.logPrint(
      1,
      function (return1) {
        console.log("return1 : " + return1);
        this.logPrint(1, function (return2) {
          console.log("return2 : " + return2);
        });
      }.bind(this)
    );
  } // Callback Hell

  logPrint(param, callback) {
    console.log("logPring param : " + param);
    param += param;
    callback(param);
  }

  render() {
    return <div>Callback Function</div>;
  }
}

export default CallbackFunction14;
