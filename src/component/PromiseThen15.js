import React, { Component } from "react";

class PromiseThen15 extends Component {
  componentDidMount() {
    new Promise((resolve) => {
      setTimeout(function () {
        resolve("Promise First Return");
      }, 1500);
    })
      .then(function (result) {
        console.log("Result in First then : " + result);
        return result + 200;
      })
      .then((result) => {
        console.log("Result in Second then : " + result);
      });
  }

  render() {
    return <div>Promise Then</div>;
  }
}

export default PromiseThen15;
