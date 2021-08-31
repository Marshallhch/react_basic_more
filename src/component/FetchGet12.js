import React, { Component } from "react";

class FetchGet12 extends Component {
  componentDidMount = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const body = await response.json();
    console.log(body);
  };

  render() {
    return <div>Fetch Get</div>;
  }
}

export default FetchGet12;
