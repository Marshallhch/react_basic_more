import React, { Component } from "react";
import axios from "axios";

class AxiosGet13 extends Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response.data);
      });
  }

  render() {
    return <div>Axios Get</div>;
  }
}

export default AxiosGet13;
